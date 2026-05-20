import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function Login() {

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    const success = await login(email, password);

    if (!success) {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="w-full h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-2">
          Nexus Control
        </h1>

        <p className="text-slate-400 mb-8">
          Faça login para continuar
        </p>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-lg py-3 font-bold"
          >
            Entrar
          </button>

        </div>

        <div className="mt-6 text-sm text-slate-500">
          admin@nexus.com
          <br />
          123456
        </div>

      </div>

    </div>
  )
}