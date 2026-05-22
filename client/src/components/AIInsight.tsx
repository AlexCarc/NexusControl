import { useDashboard } from "../context/DashboardContext";

export function AIInsight() {

  const { totalUsers } = useDashboard();

  return (
    <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 mt-8">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
          AI
        </div>

        <div>

          <h2 className="text-white font-bold text-xl">
            Insight Inteligente
          </h2>

          <p className="text-slate-400 text-sm">
            Análise automática do sistema
          </p>

        </div>

      </div>

      <p className="text-slate-300 leading-relaxed">

        O sistema identificou
        {" "}
        <span className="text-cyan-400 font-bold">
          {totalUsers} usuários
        </span>
        {" "}
        ativos na plataforma.
        O crescimento mensal está positivo
        e a retenção continua aumentando.

      </p>

    </div>
  )
}