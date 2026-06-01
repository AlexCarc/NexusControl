import { MetricCard } from "../components/MetricCard";
import { SalesChart } from "../components/SalesChart";
import { AIInsight } from "../components/AIInsight";

import { useDashboard } from "../context/DashboardContext";

export function Dashboard() {

  const {
    totalUsers,
    activeUsers,
    growthRate,
    retentionRate,
  } = useDashboard();

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Visão geral da plataforma Nexus Control
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <MetricCard
          title="Total de Usuários"
          value={String(totalUsers)}
        />

        <MetricCard
          title="Usuários Ativos"
          value={String(activeUsers)}
        />

        <MetricCard
          title="Crescimento"
          value={`${growthRate}%`}
        />

        <MetricCard
          title="Retenção"
          value={`${retentionRate}%`}
        />

      </div>

      <SalesChart />

      <AIInsight />

    </div>
  )
}