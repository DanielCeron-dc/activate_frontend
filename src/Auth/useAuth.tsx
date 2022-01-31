import { useContext } from "react";
import { AuthContext } from "./AuthContext/authContext";

export function useAuth(): { isAuth: boolean; changeAuth: (isAuth: boolean) => void } {
    const authContext = useContext(AuthContext);
    return {isAuth: authContext.isAuth, changeAuth: authContext.changeAuth};
}