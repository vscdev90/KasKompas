import MetricCard from '@/components/MetricCard';
import CashflowChart from '@/components/CashflowChart';
import UitkeringCard from '@/components/UitkeringCard';
import FacturenRisico from '@/components/FacturenRisico';
import ReserveringCard from '@/components/ReserveringCard';
import AIInsightsCard from '@/components/AIInsightsCard';
import { Euro, TrendingUp, Receipt, Wallet } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Goedemiddag, Jan 👋</h1>
        <p className="text-slate-500 mt-1 text-sm">Hier is jouw financieel overzicht van vandaag, 5 juni 2024</p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard
          titel="Omzet deze maand"
          waarde="€9.500"
          subtext="t.o.v. vorige maand"
          trend={28}
          kleur="blauw"
          icon={<Euro size={18} className="text-white" />}
        />
        <MetricCard
          titel="Netto winst"
          waarde="€7.200"
          subtext="t.o.v. vorige maand"
          trend={-18}
          kleur="rood"
          icon={<TrendingUp size={18} className="text-white" />}
        />
        <MetricCard
          titel="BTW te betalen Q2"
          waarde="€15.204"
          subtext="deadline 31 jul"
          kleur="amber"
          icon={<Receipt size={18} className="text-white" />}
        />
        <MetricCard
          titel="Beschikbaar nu"
          waarde="€4.800"
          subtext="na reserveringen"
          trend={5}
          kleur="groen"
          icon={<Wallet size={18} className="text-white" />}
        />
      </div>

      {/* Cashflow chart + Uitkering */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <CashflowChart />
        </div>
        <div>
          <UitkeringCard />
        </div>
      </div>

      {/* Facturen + Reserveringen + AI */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <ReserveringCard />
        </div>
        <div className="col-span-1">
          <FacturenRisico />
        </div>
        <div className="col-span-1">
          <AIInsightsCard />
        </div>
      </div>
    </div>
  );
}
