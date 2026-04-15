"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCheck, Copy, Sparkles, RefreshCw } from "lucide-react";
import { Sentiment, Voice } from "@/lib/review-analyzer";

interface ResponseCardProps {
  reviewText: string;
  sentiment: Sentiment;
  voice: Voice;
  responseText: string;
  onGenerateAnother?: () => void;
}

export function ResponseCard({
  reviewText,
  sentiment,
  voice,
  responseText,
  onGenerateAnother,
}: ResponseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(responseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sentimentColor =
    sentiment === "positive"
      ? "text-green-600 bg-green-50"
      : sentiment === "negative"
      ? "text-red-600 bg-red-50"
      : "text-yellow-600 bg-yellow-50";

  const sentimentLabel =
    sentiment === "positive"
      ? "😊 Positive"
      : sentiment === "negative"
      ? "😔 Negative"
      : "😐 Neutral";

  return (
    <div className="space-y-6">
      {/* Original Review */}
      <Card className="border-slate-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium text-slate-600">Original Review</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-800 italic">"{reviewText}"</p>
          <div className="mt-3 flex gap-3">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${sentimentColor}`}>
              {sentimentLabel}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
              {voice.charAt(0).toUpperCase() + voice.slice(1)} voice
            </span>
          </div>
        </CardContent>
      </Card>

      {/* AI Response */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Your Response
            </CardTitle>
            <Button
              onClick={handleCopy}
              size="sm"
              variant={copied ? "outline" : "default"}
              className={copied ? "border-green-500 text-green-600" : "bg-blue-600 hover:bg-blue-700"}
            >
              {copied ? (
                <>
                  <CheckCheck className="mr-1 h-3 w-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-1 h-3 w-3" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-800 text-lg leading-relaxed">{responseText}</p>
          <p className="text-xs text-slate-500 mt-3">
            Paste this directly into Google Business Profile or Yelp.
          </p>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3 justify-center">
        <Button onClick={onGenerateAnother} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Generate Another
        </Button>
        <Button
          onClick={() => window.location.href = "/respond"}
          className="bg-blue-600 hover:bg-blue-700"
        >
          New Review
        </Button>
      </div>
    </div>
  );
}
