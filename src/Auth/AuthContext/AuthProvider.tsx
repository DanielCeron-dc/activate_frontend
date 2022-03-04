import React, { useReducer} from 'react';
import { AuthContext } from './authContext';
import AuthReducer, { initialState } from './AuthReducer';

const AuthProvider:React.FC = (props) => {
    
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const changeAuth = (auth: boolean) => dispatch({
        type: 'CHANGE_AUTH_STATE',
        payload: auth
    })

    return <AuthContext.Provider value={{changeAuth , isAuth: state.isAuthenticated}}>
        { props.children}
    </AuthContext.Provider>
}
export default AuthProvider;