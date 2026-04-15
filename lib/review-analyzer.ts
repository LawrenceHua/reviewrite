import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type Sentiment = "positive" | "neutral" | "negative";
export type Voice = "professional" | "warm" | "witty";

export interface ReviewAnalysis {
  responseText: string;
  sentiment: Sentiment;
  voice: Voice;
}

export interface BatchAnalysis {
  positive: number;
  neutral: number;
  negative: number;
  flagged: Array<{ review: string; reason: string }>;
}

// Single review → AI response generation
export async function generateResponse(
  reviewText: string,
  sentiment: Sentiment,
  voice: Voice
): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are a professional restaurant owner responding to an online review. Given the review below, generate a concise (2-3 sentence), warm, professional response. Match the sentiment of the review. Do not be defensive or overly apologetic. If negative, acknowledge the issue specifically and invite them back.`,
      },
      {
        role: "user",
        content: `Review: ${reviewText}\nSentiment: ${sentiment}\nVoice: ${voice}`,
      },
    ],
    max_tokens: 200,
  });

  return completion.choices[0]?.message?.content?.trim() || "";
}

// Batch sentiment analysis
export async function analyzeBatch(reviews: string[]): Promise<BatchAnalysis> {
  const reviewList = reviews.map((r, i) => `${i + 1}. "${r}"`).join("\n");

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are a restaurant reputation analyst. Given a list of reviews, return a JSON object with:
- positive: count of positive reviews
- neutral: count of neutral reviews
- negative: count of negative reviews
- flagged: array of objects with review text and reason (for negative ones needing attention)

Return ONLY valid JSON, no markdown formatting.`,
      },
      {
        role: "user",
        content: `Analyze these reviews:\n${reviewList}`,
      },
    ],
    response_format: { type: "json_object" },
    max_tokens: 500,
  });

  const result = completion.choices[0]?.message?.content;
  if (!result) {
    return { positive: 0, neutral: 0, negative: 0, flagged: [] };
  }

  try {
    return JSON.parse(result) as BatchAnalysis;
  } catch {
    return { positive: 0, neutral: 0, negative: 0, flagged: [] };
  }
}
