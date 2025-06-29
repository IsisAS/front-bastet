'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const user = typeof window !== "undefined" && JSON.parse(localStorage.getItem("user") || "{}");
        if (user?.id) {
            setUserId(user.id);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUserId(null);
        window.location.href = "/";
    }

    return (
        <header className="layout-guide h-[16rem] flex flex-col justify-end">
            <h1 className="text-5xl font-bold py-5">
                <Link href="/" className="text-indigo-800 hover:text-indigo-900">Bastet</Link>
            </h1>
            <p>Uma nova plataforma de cursos</p>
            <menu className="flex flex-row gap-4">
                <Link className="text-indigo-600" href="/">Home</Link>
                <Link className="text-indigo-600" href="/register">Fazer cadastro</Link>
                <Link className="text-indigo-600" href="/auth">Fazer login</Link>
                {userId && (
                    <Link className="text-indigo-600" href={`/user/${userId}`}>Meus cursos</Link>
                )}
                {userId && (
                    <button className="text-indigo-600 cursor-pointer" onClick={logout}>Sair</button>
                )}
            </menu>
        </header>
    );
}