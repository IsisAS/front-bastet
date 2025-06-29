import { useEffect, useState } from "react";
import { CourseInterface } from "../course/course.interface";
import { getMyCourses } from "./user.service";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export function useUser() {
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState<CourseInterface[]>([]);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (!token || !user) {
            router.push('/auth');
        } else {
            setIsAuthorized(true);
        }
    }, [params.id, router]);

    useEffect(() => {
        // getCourses();
    }, [courses])

    const getCourses = async () => {
        try {
            const response = await getMyCourses(params.id as string);
            if (!response.data) {
                toast("Não há cursos cadastrados");
                return;
            }
            setCourses(response.data);
        } catch (error) {
            console.log(error)
            toast("Erro ao buscar cursos");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        courses,
        isAuthorized,
    }
}