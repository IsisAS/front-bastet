import { useState } from "react";
import { login } from "./auth.service";

export function useAuth() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setLoading(true);
        await onSubmit(formData);
    };

    const onSubmit = async (formData: FormData) => {
        const email = formData.get("email") as string;
        const senha = formData.get("senha") as string;

        if (!email || !senha) {
            console.error("Email e senha são obrigatórios");
            return;
        }

        try {
            const response = await login(email, senha);
            console.log("Login bem-sucedido:", response);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleSubmit,
        onSubmit,
        loading
    }
}