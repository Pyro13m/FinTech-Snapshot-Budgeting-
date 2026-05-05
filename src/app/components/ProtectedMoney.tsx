import { Lock, Heart, Check } from "lucide-react";

interface ProtectedMoneyProps {
  compact?: boolean;
}

export function ProtectedMoney({ compact = false }: ProtectedMoneyProps) {
  if (compact) {
    return (
      <div className="bg-white border-t border-black/10 sticky bottom-4 z-20">
        <div className="max-w-2xl mx-auto px-4 py-2">
          <div className="rounded-3xl bg-[#e9f3f8] p-3 border border-[#095fbb]/15 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-600">Protected</p>
              <p className="font-semibold text-slate-950">£950</p>
            </div>
            <div className="text-right text-xs text-slate-600">
              <p>Safe funds</p>
              <p>Quick view</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-t border-black/10 sticky bottom-4">
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-br from-[#e9f3f8] to-white rounded-2xl p-5 border border-[#095fbb]/20 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-[#095fbb]" size={20} />
            <h3 className="text-black">Protected & Growing</h3>
          </div>

          <div className="space-y-4">
            {/* Bills Vault */}
            <div className="bg-white/60 rounded-xl p-3 border border-black/5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Heart className="text-[#10b981]" size={18} />
                  <span className="text-black font-semibold">Bills Vault</span>
                </div>
                <span className="text-black text-xl font-semibold">£950</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-black/70">
                  <span>Rent (£900)</span>
                  <span className="text-[#095fbb]">due in 6 days</span>
                </div>
                <div className="flex items-center justify-between text-black/70">
                  <span>Utilities (£50)</span>
                  <span className="text-[#10b981] flex items-center gap-1">
                    paid <Check size={14} />
                  </span>
                </div>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-white/60 rounded-xl p-3 border border-black/5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌱</span>
                  <span className="text-black font-semibold">Savings</span>
                </div>
                <span className="text-black text-xl font-semibold">£458</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="text-[#10b981]">
                  +£127 this month
                </div>
                <div className="text-black/70">
                  On track for £1,500 by August 🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
