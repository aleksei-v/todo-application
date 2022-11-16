import { Navigate } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    
    if (!isLoggedIn) {
        
        return <Navigate to="/login" />
    }
    return <Outlet/>
}
 
export default PrivateRoute;