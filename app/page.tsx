"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle, Zap, Star, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">ReviewRite AI</span>
          </div>
          <nav className="flex gap-4">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium px-2.5 py-2 h-8 gap-1.5 hover:bg-slate-100 text-slate-700">Features</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium px-2.5 py-2 h-8 gap-1.5 hover:bg-slate-100 text-slate-700">Pricing</a>
            <Link href="/dashboard"><Button variant="outline">Dashboard</Button></Link>
            <Link href="/respond"><Button>Try Free</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Built for Independent Restaurants</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Paste Any Review,
            <br />
            <span className="text-blue-600">Get a Professional Response</span>
            <br />
            in 10 Seconds
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stop spending 20 minutes crafting the perfect reply. ReviewRite AI generates warm, on-brand responses for Google and Yelp reviews — ready to paste in one click.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/respond"><Button size="lg" className="bg-blue-600 hover:bg-blue-700"><Zap className="mr-2 h-4 w-4" />Try Free — No Sign Up</Button></Link>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-sm font-medium whitespace-nowrap transition-all h-9 gap-1.5 px-2.5">View Pricing<ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Instant Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Paste a review, select sentiment and voice, get a polished 2-3 sentence reply. No account required to start.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-10 w-10 text-yellow-500 mb-2" />
              <CardTitle>Match Any Tone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Professional, warm, or witty — choose the voice that fits your brand. AI matches the review's sentiment automatically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
              <CardTitle>One-Click Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Hit copy and paste directly into Google Business Profile or Yelp. Done in seconds, not minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-600 mt-2">Three steps from review to response</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Paste the Review</h3>
              <p className="text-slate-600 text-sm">Copy any Google or Yelp review and paste it into ReviewRite.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pick Sentiment & Voice</h3>
              <p className="text-slate-600 text-sm">Select how the review feels and how you want to sound.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Copy & Paste</h3>
              <p className="text-slate-600 text-sm">Get a polished response in seconds. Paste it into Google or Yelp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                Why Responding to Reviews Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Google's algorithm penalizes unresponded reviews</p>
                    <p className="text-sm text-slate-600">Businesses that don't reply rank lower in local search results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">93% of consumers read business responses to reviews</p>
                    <p className="text-sm text-slate-600">A thoughtful response shows you care and builds trust with future diners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Convert 1-star complaints into loyal customers</p>
                    <p className="text-sm text-slate-600">A well-crafted response to a negative review can win back unhappy guests.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Simple, Honest Pricing</h2>
            <p className="text-slate-600 mt-2">No surprise fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Try it out risk-free</CardDescription>
                <div className="text-3xl font-bold mt-4">$0<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>10 responses per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>All 3 voices included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Copy to clipboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sentiment detection</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span className="h-5 w-5">✗</span>
                    <span>Response history</span>
                  </li>
                </ul>
                <Link href="/respond"><Button variant="outline" className="w-full mt-6">Get Started</Button></Link>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="border-blue-500 border-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>For growing restaurants</CardDescription>
                  </div>
                  <Badge className="bg-blue-600">Popular</Badge>
                </div>
                <div className="text-3xl font-bold mt-4">$19<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>50 responses per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>All voices & templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Response history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Batch sentiment analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority AI processing</span>
                  </li>
                </ul>
                <a href="/checkout?plan=starter" className="inline-flex items-center justify-center rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium whitespace-nowrap transition-all h-8 gap-1.5 px-2.5 mt-6 w-full text-center">Subscribe — Starter</a>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For multi-location owners</CardDescription>
                <div className="text-3xl font-bold mt-4">$49<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Batch analysis (50 reviews)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Weekly digest email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a href="/checkout?plan=pro" className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-sm font-medium whitespace-nowrap transition-all h-8 gap-1.5 px-2.5 mt-6 w-full text-center">Subscribe — Pro</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="py-6">
              <p className="text-slate-700 text-sm">
                <strong>vs. the competition:</strong> Podium starts at $499/month. birdeye at $199/month. ReviewRite gives independent owners the same AI-powered response capability at a fraction of the cost.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MessageSquare className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">ReviewRite AI</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Your reviews are secure and never stored permanently</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            © 2026 ReviewRite AI by Huadini. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
