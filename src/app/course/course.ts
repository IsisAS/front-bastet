"use client"
import { useEffect, useState } from "react";
import { getAllCourses, registerInCourse, cancelCouse } from "./course.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const user = JSON.parse(localStorage.getItem('user') || '{}');


    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const response = await getAllCourses();
            setCourses(response.data);
        } catch (error) {
            console.error("Erro ao buscar os cursos:", error);
        } finally {
            setLoading(false);
        }
    }

    const register = async (courseId: string) => {
        try {
            const response = await registerInCourse(courseId, user.id);
            if (response.data) {
                toast.success("Inscrição realizada com sucesso!");
                router.push(`/user/${user.id}`);
            }
        } catch (error) {
            toast.error("Erro ao se inscrever no curso");
        }
    }

    const cancel = async (courseId: string) => {
        try {
            const response = await cancelCouse(courseId, user.id);
            if (response.data) {
                toast.success("Inscrição cancelada com sucesso!");
                router.push(`/user/${user.id}`);
            }
        } catch (error) {
            toast.error("Erro ao cancelar inscrição no curso");
        }
    }

    return {
        courses,
        loading,
        register,
        cancel
    }
}