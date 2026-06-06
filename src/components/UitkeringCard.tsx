'use client';

import { useState } from 'react';
import { Banknote, Info } from 'lucide-react';

const BTW = 0.21;
const INKOMSTENBELASTING = 0.37;
const ZELFSTANDIGENAFTREK = 5030;
const MKB_VRIJSTELLING = 0.127;
const BUFFER = 2000;

export default function UitkeringCard() {
  const [omzet, setOmzet] = useState(9500);
  const [kosten, setKosten] = useState(2300);

  const btwVerschuldigd = omzet * BTW;
  const winst = omzet - kosten;
  const belastbaarInkomen = Math.max(0, winst - ZELFSTANDIGENAFTREK) * (1 - MKB_VRIJSTELLING);
  const inkomstenbelasting = belastbaarInkomen * INKOMSTENBELASTING;
  const beschikbaar = Math.max(0, omzet - kosten - btwVerschuldigd - inkomstenbelasting - BUFFER);

  const formatEuro = (n: number) =>
    n.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-slate-800 font-semibold text-base">Hoeveel kan ik uitkeren?</h2>
          <p className="text-slate-400 text-xs mt-0.5">Na belasting & BTW-reservering</p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
          <Banknote size={18} className="text-white" />
        </div>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Omzet deze maand</label>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">€</span>
            <input
              type="range"
              min={0}
              max={20000}
              step={100}
              value={omzet}
              onChange={(e) => setOmzet(Number(e.target.value))}
              className="flex-1 accent-indigo-500"
            />
            <span className="w-20 text-right text-sm font-semibold text-slate-700">{formatEuro(omzet)}</span>
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Kosten deze maand</label>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">€</span>
            <input
              type="range"
              min={0}
              max={10000}
              step={100}
              value={kosten}
              onChange={(e) => setKosten(Number(e.target.value))}
              className="flex-1 accent-indigo-500"
            />
            <span className="w-20 text-right text-sm font-semibold text-slate-700">{formatEuro(kosten)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 text-sm flex-1">
        {[
          { label: 'Omzet', value: omzet, kleur: 'text-slate-700' },
          { label: 'Kosten', value: -kosten, kleur: 'text-red-500' },
          { label: 'BTW reservering (21%)', value: -btwVerschuldigd, kleur: 'text-amber-600' },
          { label: 'Inkomstenbelasting (est.)', value: -inkomstenbelasting, kleur: 'text-orange-500' },
          { label: 'Buffer', value: -BUFFER, kleur: 'text-slate-400' },
        ].map(({ label, value, kleur }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-slate-500">{label}</span>
            <span className={`font-medium ${kleur}`}>
              {value < 0 ? '−' : ''}{formatEuro(Math.abs(value))}
            </span>
          </div>
        ))}
        <div className="border-t border-slate-100 pt-3 mt-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700">Beschikbaar voor uitkering</span>
            <span className={`text-xl font-bold ${beschikbaar > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {formatEuro(beschikbaar)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-indigo-50 flex items-start gap-2 text-xs text-indigo-700">
        <Info size={13} className="mt-0.5 shrink-0" />
        <span>Schatting op basis van zelfstandigenaftrek en MKB-winstvrijstelling. Raadpleeg je boekhouder voor definitieve cijfers.</span>
      </div>
    </div>
  );
}
