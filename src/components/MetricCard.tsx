import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  titel: string;
  waarde: string;
  subtext?: string;
  trend?: number;
  kleur?: 'groen' | 'rood' | 'blauw' | 'amber';
  icon?: React.ReactNode;
}

export default function MetricCard({ titel, waarde, subtext, trend, kleur = 'blauw', icon }: MetricCardProps) {
  const kleurMap = {
    groen: 'from-emerald-500 to-emerald-600',
    rood: 'from-red-500 to-red-600',
    blauw: 'from-indigo-500 to-indigo-600',
    amber: 'from-amber-500 to-amber-600',
  };

  const TrendIcon = trend === undefined ? null : trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus;
  const trendColor = trend === undefined ? '' : trend > 0 ? 'text-emerald-600' : trend < 0 ? 'text-red-500' : 'text-slate-400';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-slate-500 text-sm font-medium">{titel}</p>
        {icon && (
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${kleurMap[kleur]} flex items-center justify-center`}>
            {icon}
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-800">{waarde}</p>
        <div className="flex items-center gap-2 mt-1">
          {TrendIcon && trend !== undefined && (
            <span className={`flex items-center gap-1 text-xs font-semibold ${trendColor}`}>
              <TrendIcon size={13} />
              {Math.abs(trend)}%
            </span>
          )}
          {subtext && <p className="text-slate-400 text-xs">{subtext}</p>}
        </div>
      </div>
    </div>
  );
}
