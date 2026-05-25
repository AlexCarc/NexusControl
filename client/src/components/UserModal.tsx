import { useState } from "react";

import { useDashboard } from "../context/DashboardContext";

type UserModalProps = {
  onClose: () => void
}

export function UserModal({
  onClose,
}: UserModalProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { createUser } = useDashboard();

  function handleCreateUser() {

    if (!name || !email) {
      return;
    }

    createUser(name, email);

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-md">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Novo Usuário
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-red-400 transition"
          >
            X
          </button>

        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nome do usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={handleCreateUser}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-lg py-3 font-bold"
          >
            Criar Usuário
          </button>

        </div>

      </div>

    </div>
  )
}