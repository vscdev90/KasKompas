import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { facturen } from '@/lib/mockData';

function RisicoLabel({ score }: { score: number }) {
  if (score >= 70) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-600">
      <AlertTriangle size={11} /> Hoog risico
    </span>
  );
  if (score >= 40) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
      <Clock size={11} /> Matig risico
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
      <CheckCircle size={11} /> Laag risico
    </span>
  );
}

export default function FacturenRisico() {
  const hoogRisico = facturen.filter((f) => f.risicoScore >= 70);
  const totaalRisico = hoogRisico.reduce((s, f) => s + f.bedrag, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-slate-800 font-semibold text-base">Facturen te laat betaald?</h2>
          <p className="text-slate-400 text-xs mt-0.5">AI-voorspelling op basis van klantgedrag</p>
        </div>
        {totaalRisico > 0 && (
          <div className="text-right">
            <p className="text-xs text-slate-400">Hoog risico</p>
            <p className="text-sm font-bold text-red-600">
              €{totaalRisico.toLocaleString('nl-NL')}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {facturen.map((f) => (
          <div key={f.id} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-slate-700 text-sm font-medium truncate">{f.klant}</p>
                <RisicoLabel score={f.risicoScore} />
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{f.id}</span>
                <span>Vervalt {f.vervaldatum}</span>
                <span>Gem. DPO: {f.dpo} dgn</span>
              </div>
            </div>
            <div className="text-right ml-4 shrink-0">
              <p className="text-slate-800 font-semibold text-sm">€{f.bedrag.toLocaleString('nl-NL')}</p>
              <div className="mt-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    f.risicoScore >= 70 ? 'bg-red-400' : f.risicoScore >= 40 ? 'bg-amber-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${f.risicoScore}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
