
const defaultState = {
    auth: false,
    name: '',
    token: ''
}
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "auth":
            return { ...state, auth: action.payload }
        case "name":
            return { ...state, name: action.payload }
        case "token":
            return {...state, token: action.payload }
        default:
            return state;
    }
}