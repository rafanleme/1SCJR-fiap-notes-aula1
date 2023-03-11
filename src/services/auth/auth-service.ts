import { apiAuth } from "../apiAuth";
import { User } from "./types";

interface LoginResponsePayload {
    token: string;
}

export const AuthService = {
  register: (authPayload: User) => apiAuth.post('/register', authPayload),
  login: (authPayload: User) => apiAuth.post<LoginResponsePayload>('/login', authPayload),
}