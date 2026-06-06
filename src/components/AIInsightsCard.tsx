import { Sparkles, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';
import { aiInsights } from '@/lib/mockData';

const iconMap = {
  waarschuwing: { icon: AlertTriangle, kleur: 'text-red-500 bg-red-50' },
  tip: { icon: Lightbulb, kleur: 'text-amber-600 bg-amber-50' },
  positief: { icon: TrendingUp, kleur: 'text-emerald-600 bg-emerald-50' },
};

export default function AIInsightsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
          <Sparkles size={15} className="text-white" />
        </div>
        <div>
          <h2 className="text-slate-800 font-semibold text-base">AI Inzichten</h2>
          <p className="text-slate-400 text-xs">Bijgewerkt vandaag</p>
        </div>
      </div>

      <div className="space-y-4">
        {aiInsights.map((insight) => {
          const { icon: Icon, kleur } = iconMap[insight.type as keyof typeof iconMap];
          return (
            <div key={insight.id} className="flex gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${kleur}`}>
                <Icon size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-700">{insight.titel}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{insight.tekst}</p>
                <p className="text-xs text-slate-300 mt-1.5">{insight.datum}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
