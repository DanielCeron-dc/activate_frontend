import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./useAuth";


interface iPrivateroute extends RouteProps {
    
}


const PrivateRoute:React.FC<iPrivateroute> = ({ children, ...rest }) =>  {
    let {isAuth }= useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute;