import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import { MainLayout } from "./layouts/MainLayout";

import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";
import { Reports } from "./pages/Reports";

import { Login } from "./pages/Login";

import { MetricCard } from "./components/MetricCard";

export default function App() {

  const { user } = useAuth();

  if (!user) {
    return <Login />
  }

  return (
    <MainLayout>

      <Routes>

        <Route
          path="/"
          element={
            <div>

              <Dashboard />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">

                <MetricCard
                  title="Usuários Ativos"
                  value="1.284"
                />

                <MetricCard
                  title="Vendas do Mês"
                  value="R$ 48.200"
                />

                <MetricCard
                  title="Taxa de Conversão"
                  value="18%"
                />

              </div>

            </div>
          }
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </MainLayout>
  )
}