import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";
import toast from "react-hot-toast";

type User = {
  id: number
  name: string
  email: string
}

type DashboardContextType = {
  users: User[]
  loading: boolean

  totalUsers: number
  activeUsers: number
  growthRate: number
  retentionRate: number

  createUser: (
    name: string,
    email: string,
  ) => Promise<void>

  deleteUser: (
    id: number
  ) => Promise<void>

  updateUser: (
    id: number,
    name: string,
    email: string,
  ) => Promise<void>
}

const DashboardContext = createContext(
  {} as DashboardContextType
);

type DashboardProviderProps = {
  children: ReactNode
}

export function DashboardProvider({
  children,
}: DashboardProviderProps) {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const response = await api.get<User[]>("/users");

        setUsers(response.data);

      } catch (error) {

        console.log(error);

        toast.error("Erro ao carregar usuários");

      } finally {

        setLoading(false);

      }
    }

    fetchUsers();

  }, []);

  async function createUser(
    name: string,
    email: string,
  ) {

    try {

      const response = await api.post(
        "/users",
        {
          name,
          email,
        }
      );

      setUsers((prevUsers) => [
        response.data,
        ...prevUsers,
      ]);

      toast.success("Usuário criado com sucesso!");

    } catch (error) {

      console.log(error);

      toast.error("Erro ao criar usuário");
    }
  }

  async function deleteUser(id: number) {

    try {

      await api.delete(`/users/${id}`);

      setUsers((prevUsers) =>
        prevUsers.filter(
          (user) => user.id !== id
        )
      );

      toast.success("Usuário removido!");

    } catch (error) {

      console.log(error);

      toast.error("Erro ao remover usuário");
    }
  }

  async function updateUser(
    id: number,
    name: string,
    email: string,
  ) {

    try {

      const response = await api.put(
        `/users/${id}`,
        {
          id,
          name,
          email,
        }
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) => {

          if (user.id === id) {
            return response.data;
          }

          return user;
        })
      );

      toast.success("Usuário atualizado!");

    } catch (error) {

      console.log(error);

      toast.error("Erro ao atualizar usuário");
    }
  }

  // MÉTRICAS DINÂMICAS

  const totalUsers = users.length;

  const activeUsers = Math.floor(
    users.length * 0.8
  );

  const growthRate = users.length > 0
    ? users.length * 12
    : 0;

  const retentionRate = users.length > 0
    ? 92
    : 0;

  return (
    <DashboardContext.Provider
      value={{
        users,
        loading,

        totalUsers,
        activeUsers,
        growthRate,
        retentionRate,

        createUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  return useContext(DashboardContext);
}