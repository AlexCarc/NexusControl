import { useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: number
  name: string
  email: string
}

export function UsersTable() {

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const response = await api.get("/users");

        setUsers(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    fetchUsers();

  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <p className="text-slate-400">
          Carregando usuários...
        </p>
      </div>
    )
  }

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

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={2}
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