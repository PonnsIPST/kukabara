
const defaultState = {
    auth: false,
    name: ''
}
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "auth":
            return { ...state, auth: action.payload }
        case "name":
            return { ...state, auth: action.payload }
        default:
            return state;
    }
}