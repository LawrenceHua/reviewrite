"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ResponseCard } from "@/components/response-card";
import { Loader2 } from "lucide-react";
import { Sentiment, Voice } from "@/lib/review-analyzer";

interface ReviewData {
  reviewText: string;
  sentiment: Sentiment;
  voice: Voice;
  responseText: string;
}

export default function ResponsePage() {
  const router = useRouter();
  const [data, setData] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("reviewrite_last");
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      // No data — redirect to respond
      router.replace("/respond");
    }
    setLoading(false);
  }, [router]);

  const handleGenerateAnother = async () => {
    if (!data) return;

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reviewText: data.reviewText,
          sentiment: data.sentiment,
          voice: data.voice,
        }),
      });

      const result = await res.json();
      if (result.responseText) {
        const updated = { ...data, responseText: result.responseText };
        sessionStorage.setItem("reviewrite_last", JSON.stringify(updated));
        setData(updated);
      }
    } catch (err) {
      console.error("Regenerate failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Your AI Response</h1>
          <p className="text-slate-600">Copy and paste directly into Google Business Profile or Yelp</p>
        </div>

        <ResponseCard
          reviewText={data.reviewText}
          sentiment={data.sentiment}
          voice={data.voice}
          responseText={data.responseText}
          onGenerateAnother={handleGenerateAnother}
        />
      </div>
    </div>
  );
}
