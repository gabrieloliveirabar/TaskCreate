import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

export const MainRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
