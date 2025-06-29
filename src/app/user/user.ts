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
        const token = typeof window !== "undefined" && localStorage.getItem("token");
        const user = typeof window !== "undefined" && localStorage.getItem("user");

        if (!token || !user) {
            router.push('/auth');
        } else {
            setIsAuthorized(true);
            getCourses();
        }
    }, [params.userId, router]);

    const getCourses = async () => {
        try {
            const response = await getMyCourses(params.userId as string);
            if (!response.data.enrollments) {
                toast("Não há cursos cadastrados");
                return;
            }
            const course = response.data.course.map((item: CourseInterface) => ({
                ...item,
                isEnrolled: response.data.enrollments.some((enrollment: any) => enrollment.courseId === item.id),
            }))
         
            setCourses(course);
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