import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 hidden md:flex flex-col fixed h-screen bg-slate-900 border-r border-slate-800">
      <h2 className="text-2xl font-bold text-cyan-400">
        Nexus Control
      </h2>

      <NavLink
          to="/"
          className="text-white hover:text-cyan-400 transition"
        >
          Dashboard
      </NavLink>

      <NavLink
          to="/reports"
          className="text-white hover:text-cyan-400 transition"
        >
          Relatórios
      </NavLink>
    </aside>
  )
}