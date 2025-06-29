import { enviroment } from "@/environments/environment";
import axios from "axios";

export const getMyCourses = (userId: string) => {
    return axios.get(
        enviroment.apiUrl + '/user/' + userId,
        {
            headers: { "Content-Type": "application/json" }
        }
    );
}