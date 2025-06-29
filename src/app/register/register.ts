import { useState } from "react";
import { register } from "./register.service";
import { RegisterInterface } from "./register.interface";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const navigate = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setLoading(true);
        await onSubmit(formData);
    };

    const onSubmit = async (formData: FormData) => {
        const payload: RegisterInterface = {
            name: formData.get("name") as string,
            birthDate: formData.get("birthDate") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        if(!payload.name || !payload.birthDate || !payload.email || !payload.password) {
            toast.error("Todos os campos são obrigatórios");
            setLoading(false);
            return;
        }

        try {
            const response = await register(payload);

            if(!response || !response.data) {
                toast.error("Resposta inválida do servidor");
                return;
            }

            toast.success("Usuário cadastrado com sucesso!");
            navigate.push("/auth");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao tentar registrar o ususário:");
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