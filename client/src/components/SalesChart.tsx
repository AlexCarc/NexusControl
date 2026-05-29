import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    users: 12,
  },
  {
    month: "Fev",
    users: 18,
  },
  {
    month: "Mar",
    users: 25,
  },
  {
    month: "Abr",
    users: 32,
  },
  {
    month: "Mai",
    users: 41,
  },
  {
    month: "Jun",
    users: 55,
  },
];

export function SalesChart() {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          Crescimento de Usuários
        </h2>

        <p className="text-slate-400 text-sm">
          Analytics dos últimos meses
        </p>

      </div>

      <div className="w-full h-[300px]">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#06b6d4"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}