"use client";

import React, { useState } from "react";

interface WaitlistWidgetProps {
  className?: string;
  waitlistId?: string;
  customTitle?: string;
  customDescription?: string;
}

const WaitlistWidget: React.FC<WaitlistWidgetProps> = ({
  className = "",
  waitlistId,
  customTitle = "Get Early Access",
  customDescription = "Join 1,200+ people waiting for launch",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      if (waitlistId) {
        await fetch(`/api/waitlist`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, waitlistId }),
        });
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      console.error("Waitlist error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-lg ${className}`}
      >
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          You&apos;re in! 🎉
        </h3>
        <p className="text-sm text-gray-600">
          We&apos;ll notify you when we launch
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg ${className}`}
    >
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{customTitle}</h2>
        <p className="text-sm text-gray-600">{customDescription}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-xl transition-colors text-sm whitespace-nowrap"
        >
          {isLoading ? "..." : "Join"}
        </button>
      </form>
    </div>
  );
};

export default WaitlistWidget;
