export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h2 className="text-2xl font-bold text-cyan-400">
        Nexus Control
      </h2>

      <nav className="mt-10">
        <ul className="space-y-4">
          <li className="text-slate-300 hover:text-cyan-400 cursor-pointer transition">
            Dashboard
          </li>

          <li className="text-slate-300 hover:text-cyan-400 cursor-pointer transition">
            Usuários
          </li>

          <li className="text-slate-300 hover:text-cyan-400 cursor-pointer transition">
            Relatórios
          </li>
        </ul>
      </nav>
    </aside>
  )
}