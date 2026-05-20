import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type AuthContextType = {
  user: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps) {

  const [user, setUser] = useState<string | null>(
    localStorage.getItem("user")
  );

  async function login(
    email: string,
    password: string
  ) {

    if (
      email === "admin@nexus.com" &&
      password === "123456"
    ) {

      localStorage.setItem("user", "Alex Carvalho");

      setUser("Alex Carvalho");

      return true;
    }

    return false;
  }

  function logout() {

    localStorage.removeItem("user");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}