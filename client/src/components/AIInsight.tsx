import { useDashboard } from "../context/DashboardContext";

export function AIInsight() {

  const { totalUsers } = useDashboard();

  function generateInsight() {

    if (totalUsers <= 5) {
      return "O sistema identificou crescimento inicial da plataforma. Continue expandindo sua base de usuários.";
    }

    if (totalUsers <= 15) {
      return "O crescimento mensal está consistente. A retenção de usuários está positiva.";
    }

    return "Excelente crescimento detectado. O sistema mostra forte expansão da plataforma.";
  }

  return (
    <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 mt-6">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
          AI
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Insight Inteligente
          </h2>

          <p className="text-slate-400 text-sm">
            Análise automática do sistema
          </p>

        </div>

      </div>

      <p className="text-slate-200 leading-relaxed text-lg">
        {generateInsight()}
      </p>

    </div>
  )
}