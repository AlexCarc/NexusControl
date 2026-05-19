import { Sidebar } from "./layouts/Sidebar";
import { Navbar } from "./components/Navbar";
import { MetricCard } from "./components/MetricCard";
import { SalesChart } from "./components/SalesChart";
import { UsersTable } from "./components/UsersTable";
import { AIInsight } from "./components/AIInsight";

function App() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      
      <Sidebar />

      <div className="flex-1 md:ml-64">
        
        <Navbar />

        <main className="p-4 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

            <SalesChart />

            <UsersTable />

            <AIInsight />

          </div>

        </main>

      </div>
    </div>
  )
}

export default App