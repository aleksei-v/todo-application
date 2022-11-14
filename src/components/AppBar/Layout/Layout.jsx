import { Box } from "components/Box";
import { useAuth } from "hooks/useAuth";
import { Outlet } from "react-router-dom";
import { UserMenu } from "../UserMenu";
import { AuthNav } from "../AuthNav";
import { UserInfo } from "../UserInfo";


export const Layout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box display="flex">
            <header>
                <Box as='nav' display='flex' gridGap={5} flexDirection="column">
                    <UserMenu />
                    
                    {isLoggedIn
                        ? <UserInfo />
                        : <AuthNav/>
                    }
                </Box>
            </header>
            <Outlet/>
        </Box>
    )
}