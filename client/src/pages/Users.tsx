import { UsersTable } from "../components/UsersTable";

export function Users() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Usuários
      </h1>

      <UsersTable />

    </div>
  )
}