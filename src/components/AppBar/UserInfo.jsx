import { useAuth } from "hooks/useAuth";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import AuthLoader from "components/Loaders/AuthLoader";


export const UserInfo = () => {
    const { userInfo, isLoading, isError } = useAuth()
    const dispatch = useDispatch();
    const handleExit = () => {
        dispatch(logOut())
        Notify.success("Successfuly exit")
    }

    return (
        <>
            <p>Hello, {userInfo.name}</p>
            <p>Your login: {userInfo.email}</p>
            <button onClick={handleExit}>
                Log out
            </button>

             {!isError && isLoading && <AuthLoader />}
        </>
    );
};