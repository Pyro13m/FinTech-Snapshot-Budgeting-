import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react";

interface BucketCardProps {
  emoji: string;
  name: string;
  spent: number;
  total: number;
  paceStatus: "under" | "over" | "on";
  paceAmount?: number;
}

export function BucketCard({ emoji, name, spent, total, paceStatus, paceAmount }: BucketCardProps) {
  const remaining = total - spent;
  const percentage = (remaining / total) * 100;

  const paceConfig = {
    under: {
      icon: ArrowDown,
      color: "text-[#10b981]",
      text: paceAmount ? `£${paceAmount} under usual pace` : "Under pace"
    },
    over: {
      icon: ArrowUp,
      color: "text-[#ef4444]",
      text: paceAmount ? `£${paceAmount} over usual pace` : "Over pace"
    },
    on: {
      icon: ArrowRight,
      color: "text-black/60",
      text: "On pace"
    }
  };

  const config = paceConfig[paceStatus];
  const PaceIcon = config.icon;

  return (
    <div className="py-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <span className="text-black/90">{name}</span>
      </div>
      <div className="pl-9">
        <p className="text-black mb-2">
          <span className="font-semibold">£{remaining}</span> left of £{total}
        </p>
        <div className="w-full bg-black/10 rounded-full h-2.5 mb-2">
          <div 
            className="bg-[#095fbb] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className={`flex items-center gap-1.5 ${config.color}`}>
          <PaceIcon size={16} />
          <span className="text-sm">{config.text}</span>
        </div>
      </div>
    </div>
  );
}
