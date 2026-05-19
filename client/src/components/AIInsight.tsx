export function AIInsight() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] rounded-2xl mt-6">

      <div className="bg-slate-900 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
            AI
          </div>

          <div>
            <h2 className="text-white font-bold">
              Insight Inteligente
            </h2>

            <p className="text-slate-400 text-sm">
              Análise automática do sistema
            </p>
          </div>

        </div>

        <p className="text-slate-300 leading-relaxed">
          As vendas cresceram 18% em relação ao mês anterior.
          Usuários ativos aumentaram significativamente nos últimos 30 dias.
        </p>

      </div>

    </div>
  )
}