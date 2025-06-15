import { enviroment } from "@/environments/environment";
import axios from "axios";

export const getAllCourses = async () => {
    return axios.get(enviroment.apiUrl + '/courses', {
        headers: { "Content-Type": "application/json" }
    });
}