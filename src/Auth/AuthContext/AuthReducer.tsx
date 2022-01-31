export const initialState:IState = {
    isAuthenticated: false,
}

interface IState {
    isAuthenticated: boolean
}


type IAction = {
    type: 'CHANGE_AUTH_STATE',
    payload: boolean
}


export default (state:IState, { type, payload }:IAction):IState => {
    switch (type) {

    case 'CHANGE_AUTH_STATE':
        return {  isAuthenticated: payload }

    default:
        return state
    }
}
