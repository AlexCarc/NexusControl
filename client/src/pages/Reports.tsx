import { SalesChart } from "../components/SalesChart";
import { AIInsight } from "../components/AIInsight";

export function Reports() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Relatórios
      </h1>

      <SalesChart />

      <AIInsight />

    </div>
  )
}