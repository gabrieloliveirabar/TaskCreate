import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { ReactNode } from "react";
import { Dashboard } from "../pages/Dashboard";

interface IPriveteRoute {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: IPriveteRoute) => {

  const isAuthenticated = localStorage.getItem("@TOKEN") !== null;

  return <>{isAuthenticated ? children : <Navigate to={redirectTo} />}</>;
};

export const MainRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo="/">
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
