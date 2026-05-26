import React from 'react'
import ReactDOM from 'react-dom/client'
import { DashboardProvider } from './context/DashboardContext'

import {
  BrowserRouter,
} from 'react-router-dom'

import App from './App'
import './index.css'

import { AuthProvider } from './context/AuthContext'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>

        <DashboardProvider>

            <App />

            <Toaster position="top-right" toastOptions={{style: {background: "#0f172a", color: "#fff", border: "1px solid #1e293b", }, }} />
            
        </DashboardProvider>
        
      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>,
)