import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../pages/Home"

export const MainRoutes = () => {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
 
        </Routes>
    )
}