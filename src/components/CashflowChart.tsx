'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { cashflowData } from '@/lib/mockData';

function formatEuro(val: number) {
  return `€${val.toLocaleString('nl-NL')}`;
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg text-sm">
        <p className="font-semibold text-slate-700 mb-2">{label}</p>
        {payload.map((p) => (
          <p key={p.name} className="text-slate-600">
            <span className="font-medium">{p.name}:</span> {formatEuro(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CashflowChart() {
  const huidigeIndex = cashflowData.findIndex((d) => d.voorspeld) - 1;
  const huidigeMaand = huidigeIndex >= 0 ? cashflowData[huidigeIndex].maand : undefined;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-slate-800 font-semibold text-base">Cashflow overzicht</h2>
          <p className="text-slate-400 text-xs mt-0.5">Actueel + 3 maanden voorspeld</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
            Omzet
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            Netto
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
            Kosten
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={cashflowData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="omzetGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="nettoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={48} />
          <Tooltip content={<CustomTooltip />} />
          {huidigeMaand && (
            <ReferenceLine x={huidigeMaand} stroke="#e2e8f0" strokeWidth={2} strokeDasharray="4 4" label={{ value: 'Nu', position: 'top', fontSize: 11, fill: '#94a3b8' }} />
          )}
          <Area type="monotone" dataKey="omzet" name="Omzet" stroke="#6366f1" strokeWidth={2} fill="url(#omzetGrad)" dot={false} />
          <Area type="monotone" dataKey="netto" name="Netto" stroke="#10b981" strokeWidth={2} fill="url(#nettoGrad)" dot={false} />
          <Area type="monotone" dataKey="kosten" name="Kosten" stroke="#cbd5e1" strokeWidth={1.5} fill="none" strokeDasharray="4 4" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
