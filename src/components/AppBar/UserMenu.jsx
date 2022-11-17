import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom"


export const UserMenu = () => {
 const { isLoggedIn } = useAuth();
    return (
        <>
            {isLoggedIn
                ? <NavLink to='todos'>Todos</NavLink>
                : <NavLink to='home'>Home</NavLink>
            }
        </>
            )
            
}