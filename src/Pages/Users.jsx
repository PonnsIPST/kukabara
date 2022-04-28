import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../Async/users";
import "../style/style.css";

function Users(props) {
    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    var allUsers = useSelector(state => state.userServer.users);
    console.log(allUsers)
    return (
        <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, width: `80%`, marginLeft: `10%`, height: `65vh`, alignContent: `center` }}>
            {allUsers.map((user) => {
            return(
                <div style={{display: `flex`, width: `50%`, border: `1px solid #141414`, padding: `15px 20px 10px 15px`}}>
                    <h3>{user.id}.{user.name}</h3>
                </div>
            )
            })}
        </div>
    );
}

export default Users;