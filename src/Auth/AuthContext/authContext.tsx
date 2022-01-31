import { createContext } from "react";

interface IAuthContext {
    changeAuth: (isAuth: boolean) => void;
    isAuth: boolean;
}


export const AuthContext = createContext<IAuthContext>({ changeAuth: () => { }, isAuth: false}); // AuthContext is a context object that is used to pass data to the children components.
