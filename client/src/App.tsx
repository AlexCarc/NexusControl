import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";
import { useDashboard } from "./context/DashboardContext";

import { MainLayout } from "./layouts/MainLayout";

import { Dashboard } from "./pages/Dashboard";
import { Reports } from "./pages/Reports";
import { Login } from "./pages/Login";

import { MetricCard } from "./components/MetricCard";
import { UsersTable } from "./components/UsersTable";

export default function App() {

  const { user } = useAuth();

  const { totalUsers } = useDashboard();

  if (!user) {
    return <Login />;
  }

  return (

    <MainLayout>

      <Routes>

        <Route
          path="/"
          element={
            <div>

              <Dashboard />

            </div>
          }
        />

        <Route
          path="/users"
          element={<UsersTable />}
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