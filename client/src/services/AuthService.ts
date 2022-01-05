import $api from "../http";
import {AxiosResponse} from 'axios'

import {IAuthResponse} from '../models/response/AuthResponse'

export default class AuthService {
    static async login(email: string, password: string):Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/login', {email, password})
    }

    static async register(email: string, password: string):Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/register', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}