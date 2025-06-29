import axios from "axios";
import { RegisterInterface } from "./register.interface";
import { enviroment } from "@/environments/environment";

export const register = async (payload: RegisterInterface) => {
    return axios.post(
        enviroment.apiUrl + '/user',
        payload,
        {
            headers: { "Content-Type": "application/json" }
        }
    );
}