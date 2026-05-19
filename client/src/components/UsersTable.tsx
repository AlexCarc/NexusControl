import { useState } from "react";
import { users } from "../utils/mockData";

export function UsersTable() {

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-bold text-white">
          Usuários Recentes
        </h2>

        <input
          type="text"
          placeholder="Buscar usuário..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-cyan-500"
        />

      </div>

      <table className="w-full">

        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-800">
            <th className="pb-3">Nome</th>
            <th className="pb-3">Email</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>

          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="py-4 text-white">
                  {user.name}
                </td>

                <td className="py-4 text-slate-400">
                  {user.email}
                </td>

                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.status === "Ativo"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {user.status}
                  </span>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="text-center py-8 text-slate-500"
              >
                Nenhum usuário encontrado.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  )
}