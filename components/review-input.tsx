"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sentiment, Voice } from "@/lib/review-analyzer";
import { MessageSquare, Sparkles, Loader2 } from "lucide-react";

interface ReviewInputProps {
  onGenerated?: (data: { reviewText: string; sentiment: Sentiment; voice: Voice; responseText: string }) => void;
}

export function ReviewInput({ onGenerated }: ReviewInputProps) {
  const router = useRouter();
  const [reviewText, setReviewText] = useState("");
  const [sentiment, setSentiment] = useState<Sentiment>("neutral");
  const [voice, setVoice] = useState<Voice>("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!reviewText.trim()) {
      setError("Please paste a review first.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewText, sentiment, voice }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      if (onGenerated) {
        onGenerated({ reviewText, sentiment, voice, responseText: data.responseText });
      } else {
        // Store in sessionStorage for response page
        sessionStorage.setItem(
          "reviewrite_last",
          JSON.stringify({ reviewText, sentiment, voice, responseText: data.responseText })
        );
        router.push("/response");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          Paste Your Review
        </CardTitle>
        <CardDescription>
          Copy any Google or Yelp review and paste it below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Textarea
            placeholder="The food was amazing but the service was a bit slow..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={5}
            className="w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Sentiment</label>
            <div className="flex gap-2">
              {(["positive", "neutral", "negative"] as Sentiment[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSentiment(s)}
                  className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                    sentiment === s
                      ? s === "positive"
                        ? "border-green-500 bg-green-50 text-green-700"
                        : s === "neutral"
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Voice</label>
            <div className="flex gap-2">
              {(["professional", "warm", "witty"] as Voice[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                    voice === v
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
        )}

        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Response
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
