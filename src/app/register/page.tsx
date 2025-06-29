"use client"
import Link from "next/link";
import { useRegister } from "./register";

export default function Page() {
  const { handleSubmit, loading } = useRegister();
  return (
    <main>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="page-title">Cadastro</h2>
        <p>Eu já tenho cadastro, quero <Link href="/login">fazer login.</Link></p>
        <div className="max-w-96 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome</label>
            <input type="nome" required name="name" id="name" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nascimento">Data de nascimento</label>
            <input type="date" required name="birthDate" id="birthdate" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input type="email" required name="email" id="email" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="senha">Senha</label>
            <input type="password" required name="password" id="password" className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-end">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-t-indigo-500 border-indigo-300 rounded-full animate-spin"></div>
            </div>
          ) : <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg">Cadastrar</button>}
        </div>
      </form>
    </main>
  );
}
