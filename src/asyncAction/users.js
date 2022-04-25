
import { addManyUsers } from "../store/userFromServerReducer"


export const fetchUsers = (dispatch) => {
        console.log('here we go')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyUsers(json)))
            .then(console.log(111));
}