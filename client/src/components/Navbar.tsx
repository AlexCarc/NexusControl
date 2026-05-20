import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="w-full h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 md:px-8">

      <div className="flex items-center gap-4">

        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-slate-400 text-sm hidden md:block">
            Bem-vindo ao Nexus Control
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <button className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-lg font-medium text-sm md:text-base">
          Novo Relatório
        </button>

        <button
          onClick={logout} className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-500 transition">
        </button>

      </div>

    </header>
  )
}