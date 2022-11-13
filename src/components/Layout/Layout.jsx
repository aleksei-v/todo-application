import { Box } from "components/Box"
import { NavLink, Outlet } from "react-router-dom"


export const Layout = () => {

    return (
        <>
            <header>
                <Box as='nav' display='flex' gridGap={5}>
                    <NavLink to='home'>Home</NavLink>
                    <NavLink to='todos'>Todos</NavLink>
                    <NavLink to='register'>Registration</NavLink>
                    <NavLink to='login'>Login</NavLink>
                </Box>
            </header>
            <Outlet/>
        </>
    )
}