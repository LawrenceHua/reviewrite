"use client";

import { ReviewInput } from "@/components/review-input";

export default function RespondPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Generate Your Response</h1>
          <p className="text-slate-600">Paste a review below and get an AI-crafted reply in seconds</p>
        </div>

        <ReviewInput />
      </div>
    </div>
  );
}
