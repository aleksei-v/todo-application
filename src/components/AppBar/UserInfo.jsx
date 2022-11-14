import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";



export const UserInfo = () => {
    const { userInfo } = useAuth()
    const dispatch = useDispatch();
    const handleExit = () => {
        dispatch(logOut())
        console.log("Successfuly exit")
    }

    return (
        <>
            <p>Hello, {userInfo.name}</p>
            <p>Your login: {userInfo.email}</p>
            <button onClick={handleExit}>
                Log out
            </button>
        </>
    );
};