import { useState } from "react";

import { useDashboard } from "../context/DashboardContext";

import toast from "react-hot-toast";

type EditUserModalProps = {
  user: {
    id: number
    name: string
    email: string
  }
  onClose: () => void
}

export function EditUserModal({
  user,
  onClose,
}: EditUserModalProps) {

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const { updateUser } = useDashboard();

  function handleUpdateUser() {

    updateUser(
      user.id,
      name,
      email,
    );

    toast.success("Usuário atualizado");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-md">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Editar Usuário
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={handleUpdateUser}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-lg py-3 font-bold"
          >
            Salvar Alterações
          </button>

        </div>

      </div>

    </div>
  )
}