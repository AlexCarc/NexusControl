type MetricCardProps = {
  title: string
  value: string
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 transition duration-300 hover:scale-[1.02] cursor-pointer">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>

    </div>
  )
}