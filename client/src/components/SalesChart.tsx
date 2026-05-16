import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "../utils/mockData";

export function SalesChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-[400px]">

      <h2 className="text-xl font-bold text-white mb-6">
        Visão de Vendas
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={salesData}>
          
          <XAxis
            dataKey="month"
            stroke="#94a3b8"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#06b6d4"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}