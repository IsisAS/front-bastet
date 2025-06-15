"use client"
import { useEffect, useState } from "react";
import { getAllCourses } from "./course.service";

export function useCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return {
        courses,
        loading
    }
}