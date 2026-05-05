import { Circle } from "lucide-react";

interface SafeToSpendCardProps {
  amount: number;
  status: "green" | "amber" | "red";
  daysLeft: number;
  compact?: boolean;
}

export function SafeToSpendCard({ amount, status, daysLeft, compact = false }: SafeToSpendCardProps) {
  const statusConfig = {
    green: {
      color: "#10b981",
      text: "On Track",
      bgColor: "bg-[#e9f3f8]"
    },
    amber: {
      color: "#f59e0b",
      text: "Tight",
      bgColor: "bg-[#e9f3f8]"
    },
    red: {
      color: "#ef4444",
      text: "Behind",
      bgColor: "bg-[#e9f3f8]"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bgColor} rounded-2xl border border-black/5 shadow-sm transition-all duration-300 ${compact ? "p-3" : "p-5"}`}>
      <div className="space-y-3 text-center">
        <p className={`${compact ? "text-sm" : "text-base"} text-black/70`}>💰 You Can Spend</p>
        <div className={`mx-auto flex items-end justify-center gap-2 ${compact ? "text-3xl" : "text-4xl"} font-semibold text-black`}>
          <span>£{amount}</span>
          <span className={`${compact ? "text-3xl" : "text-4xl"} text-black/60`}>Today</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Circle 
              fill={config.color} 
              color={config.color} 
              size={compact ? 10 : 12} 
            />
            <span className="text-black/80">
              {config.text} • {daysLeft} days left
            </span>
          </div>
          {!compact ? (
            <p className="text-xs text-black/60">Scroll down to see more details</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
