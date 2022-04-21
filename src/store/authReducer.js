
const defaultState = {
    auth: false
}
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "auth":
            return { ...state, auth: action.payload }
        case "unAuth":
            return { ...state, auth: action.payload }
        default:
            return state;
    }
}