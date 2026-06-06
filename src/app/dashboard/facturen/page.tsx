import FacturenRisico from '@/components/FacturenRisico';
import { facturen } from '@/lib/mockData';

export default function FacturenPage() {
  const totaalOpen = facturen.reduce((s, f) => s + f.bedrag, 0);
  const hoogRisico = facturen.filter((f) => f.risicoScore >= 70);
  const totaalRisico = hoogRisico.reduce((s, f) => s + f.bedrag, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Facturen</h1>
        <p className="text-slate-500 text-sm mt-1">Openstaande facturen met betalingsrisico-analyse</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Totaal uitstaand', value: `€${totaalOpen.toLocaleString('nl-NL')}`, sub: `${facturen.length} facturen` },
          { label: 'Hoog risico', value: `€${totaalRisico.toLocaleString('nl-NL')}`, sub: `${hoogRisico.length} facturen` },
          { label: 'Gem. betalingstermijn', value: '32 dagen', sub: 'Klantgemiddelde' },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-slate-400 text-xs mb-1">{label}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-slate-400 text-xs mt-1">{sub}</p>
          </div>
        ))}
      </div>

      <FacturenRisico />
    </div>
  );
}
