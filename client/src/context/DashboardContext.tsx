import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

type User = {
  id: number
  name: string
  email: string
}

type DashboardContextType = {
  users: User[]
  loading: boolean
  totalUsers: number
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

      } finally {

        setLoading(false);

      }
    }

    fetchUsers();

  }, []);

  return (
    <DashboardContext.Provider
      value={{
        users,
        loading,
        totalUsers: users.length,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  return useContext(DashboardContext);
}