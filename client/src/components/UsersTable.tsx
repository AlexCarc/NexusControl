import { users } from "../utils/mockData";

export function UsersTable() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-xl font-bold text-white mb-6">
        Usuários Recentes
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-800">
            <th className="pb-3">Nome</th>
            <th className="pb-3">Email</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-slate-800"
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
          ))}
        </tbody>

      </table>

    </div>
  )
}