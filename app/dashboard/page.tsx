"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Copy, CheckCheck, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Sentiment, Voice } from "@/lib/review-analyzer";

interface HistoryItem {
  id: string;
  reviewText: string;
  sentiment: Sentiment;
  voice: Voice;
  responseText: string;
  createdAt: string;
}

export default function DashboardPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    // Load from localStorage for now (Firebase/Firestore can be wired later)
    const stored = localStorage.getItem("reviewrite_history");
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    }
    setLoading(false);
  }, []);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sentimentColor = (s: Sentiment) =>
    s === "positive" ? "text-green-600 bg-green-50" :
    s === "negative" ? "text-red-600 bg-red-50" :
    "text-yellow-600 bg-yellow-50";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Response History</h1>
            <p className="text-slate-600 mt-1">Your recent AI-generated responses</p>
          </div>
          <div className="flex gap-3">
            <Link href="/respond">
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <MessageSquare className="h-4 w-4" />
                New Response
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading...</div>
        ) : history.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No responses yet</h3>
              <p className="text-slate-500 mb-6">Generate your first AI response to see it here.</p>
              <Link href="/respond">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Generate Response
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <Card key={item.id} className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${sentimentColor(item.sentiment)}`}>
                        {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                        {item.voice.charAt(0).toUpperCase() + item.voice.slice(1)} voice
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant={copiedId === item.id ? "outline" : "default"}
                      className={copiedId === item.id ? "border-green-500 text-green-600" : "bg-blue-600 hover:bg-blue-700"}
                      onClick={() => handleCopy(item.id, item.responseText)}
                    >
                      {copiedId === item.id ? (
                        <><CheckCheck className="h-3 w-3 mr-1" /> Copied!</>
                      ) : (
                        <><Copy className="h-3 w-3 mr-1" /> Copy</>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Review:</p>
                    <p className="text-sm text-slate-700 italic">"{item.reviewText}"</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Response:</p>
                    <p className="text-sm text-slate-800">{item.responseText}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
