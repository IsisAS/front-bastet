"use client"
import Link from "next/link";
import { useAuth } from "./auth";

export default function Page() {
  const { handleSubmit, loading } = useAuth();

  return (
    <main>
      <form className="p-6 bg-indigo-50 max-w-96 rounded-3xl flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="page-title">Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input type="email" required name="email" id="email" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="senha">Senha</label>
          <input type="password" required name="senha" id="senha" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
        </div>
        <div className="flex flex-row justify-between items-end">
          <Link href="/register" className="my-3">Fazer cadastro</Link>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-t-indigo-500 border-indigo-300 rounded-full animate-spin"></div>
            </div>
          ) : <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg">Entrar</button>}
        </div>
      </form>
    </main>
  );
}
