import { Target, TrendingUp } from "lucide-react";
import { useState } from "react";

export function InsightsPanel() {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-black/10 shadow-sm">
      <button
        onClick={() => setShowInsights(!showInsights)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-black/[0.02] transition-colors rounded-2xl"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <h3 className="text-black">Smart Insights</h3>
        </div>
        <span className="text-black/40">
          {showInsights ? "−" : "+"}
        </span>
      </button>

      {showInsights && (
        <div className="px-6 pb-6 space-y-4 border-t border-black/5 pt-4">
          {/* Insight 1: On Track */}
          <div className="flex gap-3 p-4 bg-[#e9f3f8] rounded-xl">
            <Target className="text-[#10b981] shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-black font-medium mb-1">
                🎯 On Track to Save £140 This Month
              </p>
              <p className="text-black/70 text-sm">
                That's £85 more than last month! Keep it up 💪
              </p>
            </div>
          </div>

          {/* Insight 3: Pattern Spotted */}
          <div className="flex gap-3 p-4 bg-[#e9f3f8] rounded-xl">
            <TrendingUp className="text-[#095fbb] shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-black font-medium mb-1">
                🔍 Pattern Spotted
              </p>
              <p className="text-black/70 text-sm">
                You spend 40% more on Thursdays (after-work drinks?). Today's Thursday — just a heads up!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}