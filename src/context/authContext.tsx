import axios, { AxiosError, AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { AuthService } from "../services/auth/auth-service";
import { User } from "../services/auth/types";

interface AuthContextTypes {
    isAuthenticated: boolean;
    isLoading: boolean;
    handleLogin: (user: User) => void
}

interface ErrorResponse extends AxiosError {
    response: AxiosResponse<{ erro: string }>
}

export const AuthContext = createContext({} as AuthContextTypes);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) setIsAuthenticated(true);

        setIsLoading(false);
    }, []);

    const handleLogin = async (user: User) => {
        try {
            const { data } = await AuthService.login(user);

            localStorage.setItem("token", data.token);
            setIsAuthenticated(true);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error as ErrorResponse;
                err.response?.data.erro;
            } else {
                alert("Houve um erro inesperado, tente novamente mais tarde.")
            }
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
}