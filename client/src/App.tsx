import { Sidebar } from "./layouts/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-10 bg-slate-950 text-white">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>
      </main>
    </div>
  )
}

export default App