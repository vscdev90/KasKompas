'use client';

import { PiggyBank, Receipt, TrendingDown } from 'lucide-react';
import { reserveringen as r } from '@/lib/mockData';

function ProgressBar({ value, max, kleur }: { value: number; max: number; kleur: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
      <div className={`h-full rounded-full ${kleur}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function ReserveringCard() {
  const formatEuro = (n: number) => `€${n.toLocaleString('nl-NL')}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
      <div>
        <h2 className="text-slate-800 font-semibold text-base">Reserveringen</h2>
        <p className="text-slate-400 text-xs mt-0.5">BTW & inkomstenbelasting</p>
      </div>

      {/* BTW */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
        <div className="flex items-center gap-2 mb-2">
          <Receipt size={16} className="text-amber-600" />
          <span className="text-sm font-semibold text-amber-800">BTW-reservering</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-amber-700">Gereserveerd</span>
          <span className="font-semibold text-amber-800">{formatEuro(r.btwGereserveerd)}</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-amber-700">Verschuldigd Q2</span>
          <span className="font-semibold text-amber-800">{formatEuro(r.btwVerschuldigd)}</span>
        </div>
        <ProgressBar value={r.btwGereserveerd} max={r.btwVerschuldigd} kleur="bg-amber-400" />
        <p className="text-xs text-amber-700 mt-2 font-medium">
          Tekort: {formatEuro(r.btwTekort)} – deadline 31 jul
        </p>
      </div>

      {/* Inkomstenbelasting */}
      <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
        <div className="flex items-center gap-2 mb-2">
          <PiggyBank size={16} className="text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-800">Inkomstenbelasting</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-indigo-700">Geschatte aanslag</span>
          <span className="font-semibold text-indigo-800">{formatEuro(r.inkomstenbelasting)}</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-indigo-700">Opzij gezet</span>
          <span className="font-semibold text-indigo-800">{formatEuro(r.bespaard)}</span>
        </div>
        <ProgressBar value={r.bespaard} max={r.inkomstenbelasting} kleur="bg-indigo-400" />
        <p className="text-xs text-indigo-700 mt-2 font-medium">
          Goed gedekt – {Math.round((r.bespaard / r.inkomstenbelasting) * 100)}% gespaard
        </p>
      </div>

      {/* Zelfstandigenaftrek tip */}
      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-2">
        <TrendingDown size={14} className="text-emerald-600 mt-0.5 shrink-0" />
        <p className="text-xs text-emerald-700">
          <span className="font-semibold">Zelfstandigenaftrek {formatEuro(r.zelfstandigenaftrek)}</span> + MKB-winstvrijstelling 12,7% al meegenomen in berekening.
        </p>
      </div>
    </div>
  );
}
