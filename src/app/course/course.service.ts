import { enviroment } from "@/environments/environment";
import axios from "axios";

export const getAllCourses = async () => {
    return axios.get(enviroment.apiUrl + '/courses', {
        headers: { "Content-Type": "application/json" }
    });
}

export const registerInCourse = async (courseId: string, userId: string) => {
    return axios.post(enviroment.apiUrl + '/courses/register', {
        courseId: courseId,
        userId: userId
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const cancelCouse = async (courseId: string, userId: string) => {
    return axios.post(enviroment.apiUrl + '/courses/cancel', {
        courseId: courseId,
        userId: userId
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });
}