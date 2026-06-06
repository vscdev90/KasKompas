'use client';

import { cashflowData } from '@/lib/mockData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend,
} from 'recharts';

function formatEuro(val: number) {
  return `€${val.toLocaleString('nl-NL')}`;
}

export default function CashflowPage() {
  const actueel = cashflowData.filter((d) => !d.voorspeld);
  const totaalOmzet = actueel.reduce((s, d) => s + d.omzet, 0);
  const totaalNetto = actueel.reduce((s, d) => s + d.netto, 0);
  const gemOmzet = Math.round(totaalOmzet / actueel.length);

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Cashflow</h1>
        <p className="text-slate-500 text-sm mt-1">Inkomsten, kosten en voorspellingen per maand</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
        {[
          { label: 'YTD omzet', value: formatEuro(totaalOmzet), sub: '6 maanden' },
          { label: 'YTD netto', value: formatEuro(totaalNetto), sub: 'Na kosten' },
          { label: 'Gem. maandomzet', value: formatEuro(gemOmzet), sub: 'YTD' },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-slate-400 text-xs mb-1">{label}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-slate-400 text-xs mt-1">{sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
        <h2 className="font-semibold text-slate-800 mb-4">Omzet & netto per maand</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cashflowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={48} />
            <Tooltip formatter={(v) => (typeof v === 'number' ? formatEuro(v) : v)} />
            <Legend />
            <Bar dataKey="omzet" name="Omzet" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="netto" name="Netto" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="kosten" name="Kosten" fill="#f1f5f9" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="font-semibold text-slate-800 mb-1">Cashflow trend (incl. voorspelling)</h2>
        <p className="text-slate-400 text-xs mb-4">Gestippeld = AI-voorspelling</p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={cashflowData}>
            <defs>
              <linearGradient id="nettoGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={48} />
            <Tooltip formatter={(v) => (typeof v === 'number' ? formatEuro(v) : v)} />
            <Area type="monotone" dataKey="netto" name="Netto cashflow" stroke="#10b981" strokeWidth={2} fill="url(#nettoGrad2)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
