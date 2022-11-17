import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'
import CustomOutlet from "components/Outlet";

const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    
    if (isLoggedIn) {
        return <Navigate to="/todos"/>
    }
    return <CustomOutlet/>
}
 
export default PublicRoute;