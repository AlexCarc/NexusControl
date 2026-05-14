export function Navbar() {
  return (
    <header className="w-full h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 text-sm">
          Bem-vindo ao Nexus Control
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-lg font-medium">
          Novo Relatório
        </button>

        <div className="w-10 h-10 rounded-full bg-slate-700"></div>
      </div>
    </header>
  )
}