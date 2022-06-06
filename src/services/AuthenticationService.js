import axios from "axios";
import { BASE_API_URL } from "../common/Constants";

const BASE_URL = BASE_API_URL + '/api/authentication'

const AuthenticationService = () => {

    const login = (user) => {
        return axios.post(BASE_URL + '/sign-in', user);
    }

    const register = (user) => {
        return axios.post(BASE_URL + '/sign-up', user);
    }

}

export default AuthenticationService;