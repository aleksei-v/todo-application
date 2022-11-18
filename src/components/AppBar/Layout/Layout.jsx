import { Box } from "theme/Box";
import { useAuth } from "hooks/useAuth";
import { UserMenu } from "../UserMenu";
import { AuthNav } from "../AuthNav";
import { UserInfo } from "../UserInfo";
import CustomOutlet from "components/Outlet";



export const Layout = () => {
    const { isLoggedIn} = useAuth();
    return (
        <>
            <Box display="flex">
                <header>
                    <Box as='nav' display='flex' gridGap={5} flexDirection="column">
                        <UserMenu /> 
                        {isLoggedIn
                            ? <UserInfo />
                            : <AuthNav />
                        }
                    </Box>
                </header>
                <CustomOutlet />
            </Box>
        </>
    )
};