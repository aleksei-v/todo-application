import { Navigate } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';
import CustomOutlet from "components/Outlet";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    
    if (!isLoggedIn) {
        
        return <Navigate to="/login" />
    }
    return <CustomOutlet/>
}
 
export default PrivateRoute;