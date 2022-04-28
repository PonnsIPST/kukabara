import { userToken } from "../store/authReducer";

export const getUserToken = (userLogin, userPassword) => {

    const url = "https://api.englishpatient.org/login"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
        "email": userLogin,
        "password": userPassword
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };
    return function(dispatch){
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => dispatch(userToken(result.token)));

        fetch(url, requestOptions)
            .then(response => {
                if (response.ok) {
                    dispatch({ type: 'name', payload: userLogin });
                    dispatch({ type: 'auth', payload: true });
                }
            })
    }
}