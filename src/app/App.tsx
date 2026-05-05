import { useEffect, useState } from "react";
import { SafeToSpendCard } from "./components/SafeToSpendCard";
import { BucketCard } from "./components/BucketCard";
import { InsightsPanel } from "./components/InsightsPanel";
import { ProtectedMoney } from "./components/ProtectedMoney";

const scenarios = [
  {
    key: "good",
    label: "Good scenario",
    description: "Healthy daily spend and strong momentum.",
    safeToSpend: { amount: 220, status: "green" as const, daysLeft: 18 },
    buckets: [
      { emoji: "🍕", name: "Eating Out", spent: 40, total: 140, paceStatus: "under" as const, paceAmount: 25 },
      { emoji: "🚇", name: "Transport", spent: 15, total: 85, paceStatus: "under" as const, paceAmount: 18 },
      { emoji: "🛍️", name: "Shopping", spent: 35, total: 95, paceStatus: "under" as const, paceAmount: 22 },
      { emoji: "🏪", name: "Groceries", spent: 30, total: 180, paceStatus: "under" as const, paceAmount: 40 }
    ]
  },
  {
    key: "average",
    label: "Average scenario",
    description: "The month is tight, but manageable.",
    safeToSpend: { amount: 96, status: "amber" as const, daysLeft: 11 },
    buckets: [
      { emoji: "🍕", name: "Eating Out", spent: 105, total: 140, paceStatus: "on" as const },
      { emoji: "🚇", name: "Transport", spent: 68, total: 85, paceStatus: "over" as const, paceAmount: 12 },
      { emoji: "🛍️", name: "Shopping", spent: 80, total: 95, paceStatus: "over" as const, paceAmount: 10 },
      { emoji: "🏪", name: "Groceries", spent: 110, total: 180, paceStatus: "on" as const }
    ]
  },
  {
    key: "bad",
    label: "Bad scenario",
    description: "Already ahead of the budget and needs recovery.",
    safeToSpend: { amount: 18, status: "red" as const, daysLeft: 5 },
    buckets: [
      { emoji: "🍕", name: "Eating Out", spent: 135, total: 140, paceStatus: "over" as const, paceAmount: 10 },
      { emoji: "�", name: "Transport", spent: 82, total: 85, paceStatus: "over" as const, paceAmount: 7 },
      { emoji: "🛍️", name: "Shopping", spent: 93, total: 95, paceStatus: "over" as const, paceAmount: 8 },
      { emoji: "🏪", name: "Groceries", spent: 170, total: 180, paceStatus: "on" as const }
    ]
  },
  {
    key: "notification",
    label: "Notification preview",
    description: "Expanded mobile notification bar showing the top metric.",
    safeToSpend: { amount: 84, status: "amber" as const, daysLeft: 12 },
    buckets: [
      { emoji: "�", name: "Eating Out", spent: 92, total: 140, paceStatus: "on" as const },
      { emoji: "🚇", name: "Transport", spent: 50, total: 85, paceStatus: "on" as const },
      { emoji: "🛍️", name: "Shopping", spent: 72, total: 95, paceStatus: "on" as const },
      { emoji: "🏪", name: "Groceries", spent: 132, total: 180, paceStatus: "under" as const, paceAmount: 18 }
    ]
  }
];

export default function App() {
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const selectedScenario = activeScenario ? scenarios.find((scenario) => scenario.key === activeScenario) : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-[420px]">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {!selectedScenario ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-black/40">Scenario mode</p>
                <h1 className="text-2xl font-semibold text-black">Explore financial outcomes</h1>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f8fafc] p-4">
              <p className="text-sm font-semibold text-slate-900">Best viewed in mobile inspect mode</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                For the best experience, preview this fintech design from a mobile perspective. Use your browser's device inspector or developer mobile view so you can see how the notification and spending summary feel in a phone-sized screen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.key}
                  onClick={() => setActiveScenario(scenario.key)}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-left text-slate-900 transition-colors shadow-sm hover:border-black/20 hover:bg-slate-50"
                >
                  <div className="font-semibold">{scenario.label}</div>
                  <p className="mt-1 text-sm text-black/60">{scenario.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <button
              onClick={() => setActiveScenario(null)}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-slate-50"
            >
              ← Back to scenarios
            </button>

            {activeScenario === "notification" ? (
              <div className="rounded-3xl border border-black/10 bg-[#f8fafc] p-4 shadow-sm">
                <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
                  <div className="text-sm font-medium text-slate-300 mb-4">9:41</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Spend today</p>
                      <p className="text-3xl font-semibold">£{selectedScenario.safeToSpend.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Amount remaining</p>
                      <p className="text-3xl font-semibold">£{selectedScenario.safeToSpend.amount * selectedScenario.safeToSpend.daysLeft}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-4 pt-4 border-t border-slate-700/50">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Status</p>
                      <p className="text-sm font-semibold">On Budget</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Days left</p>
                      <p className="text-2xl font-semibold">{selectedScenario.safeToSpend.daysLeft}d</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 text-sm text-slate-300">
                    <span>Preview</span>
                    <span className="font-medium text-white">Notification</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="sticky top-4 z-30">
                  <SafeToSpendCard
                    amount={selectedScenario.safeToSpend.amount}
                    status={selectedScenario.safeToSpend.status}
                    daysLeft={selectedScenario.safeToSpend.daysLeft}
                    compact={scrolled}
                  />
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h2 className="text-black">Your Money This Month</h2>
                      <p className="text-sm text-black/60">{selectedScenario.label} overview</p>
                    </div>
                  </div>
                  <div className="h-px bg-black/10 mb-2" />
                  <div className="divide-y divide-black/5">
                    {selectedScenario.buckets.map((bucket, index) => (
                      <BucketCard key={index} {...bucket} />
                    ))}
                  </div>
                </div>

                <InsightsPanel scenarioKey={selectedScenario.key} />
              </>
            )}
          </div>
        )}

        {selectedScenario && activeScenario !== "notification" ? <ProtectedMoney compact={scrolled} /> : null}
      </div>

      <footer className="max-w-2xl mx-auto px-4 py-4 text-center text-sm text-black/60">
        © Priyom 2026
      </footer>
    </div>
  );
}
