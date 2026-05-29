import { MetricCard } from "../components/MetricCard";
import { SalesChart } from "../components/SalesChart";

import { useDashboard } from "../context/DashboardContext";

export function Dashboard() {

  const { totalUsers } = useDashboard();

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <MetricCard
          title="Usuários Ativos"
          value={String(totalUsers)}
        />

        <MetricCard
          title="Vendas do Mês"
          value="R$ 48.200"
        />

        <MetricCard
          title="Taxa de Conversão"
          value="18%"
        />

      </div>

      <SalesChart />

    </div>
  )
}