import { useContext } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

const PrivateRoute = ({ isAuthenticated }: PrivateRouteProps) => {
    if (!isAuthenticated) return <Navigate to='/' replace />

    return <Outlet />
}

export const AppRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}