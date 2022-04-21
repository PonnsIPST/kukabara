
const defaultState = {
     email: '',
     password: ''
}

const email = 'email';
const password = 'password'

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case email:
            return { ...state, email: action.payload }
        case password:
            return { ...state, password: action.payload }
        default:
            return state;
    }
}