import { NavLink } from "react-router-dom";

export function Sidebar() {

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-8 fixed h-screen">

      <h1 className="text-4xl font-bold text-cyan-400 mb-12">
        Nexus Control
      </h1>

      <nav className="flex flex-col gap-6">

        <NavLink
          to="/"
          className="text-white hover:text-cyan-400 transition"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className="text-white hover:text-cyan-400 transition"
        >
          Usuários
        </NavLink>

        <NavLink
          to="/reports"
          className="text-white hover:text-cyan-400 transition"
        >
          Relatórios
        </NavLink>

      </nav>

    </aside>
  )
}