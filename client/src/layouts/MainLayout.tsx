import { ReactNode } from "react";

import { Sidebar } from "./Sidebar";
import { Navbar } from "../components/Navbar";

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({
  children,
}: MainLayoutProps) {

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 md:ml-64">

        <Navbar />

        <main className="p-4 md:p-8">
          {children}
        </main>

      </div>

    </div>
  )
}