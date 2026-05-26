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

  createUser: (
    name: string,
    email: string,
  ) => void

  deleteUser: (id: number) => void

  updateUser: (
    id: number,
    name: string,
    email: string,
  ) => void
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

  function createUser(
    name: string,
    email: string,
  ) {

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    setUsers((prevUsers) => [
      newUser,
      ...prevUsers,
    ]);
  }

  function deleteUser(id: number) {

    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => user.id !== id
      )
    );
  }

  function updateUser(
    id: number,
    name: string,
    email: string,
  ) {

    setUsers((prevUsers) =>
      prevUsers.map((user) => {

        if (user.id === id) {
          return {
            ...user,
            name,
            email,
          };
        }

        return user;
      })
    );
  }

  return (
    <DashboardContext.Provider
      value={{
        users,
        loading,
        totalUsers: users.length,
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