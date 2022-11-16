import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    
    if (isLoggedIn) {
        return <Navigate to="/todos"/>
    }
    return <Outlet/>
}
 
export default PublicRoute;