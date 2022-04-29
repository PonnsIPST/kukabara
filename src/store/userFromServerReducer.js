const defaultState = {
    users: []
};

const ADD_MANY_USERS = 'ADD_MANY_USERS';
const ERASE = 'ERASE'

export const userFromServerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_USERS:
            return { ...state, users: [...state.users, ...action.payload] }
        case ERASE:
            return {...state, users: []}
        default:
            return state;
    }
}

export const addManyUsers = (payload) => ({ type: ADD_MANY_USERS, payload })