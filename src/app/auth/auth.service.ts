import { enviroment } from "@/environments/environment";
import axios from "axios";

export const login = async (email: string, password: string) => {
    return axios.post(
        enviroment.apiUrl + '/auth/login',
        {
            email: email,
            password: password
        },
        {
            headers: { "Content-Type": "application/json" }
        }
    );
};
