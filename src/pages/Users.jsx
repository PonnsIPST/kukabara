import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../async/users";
import Btn from "../ui/Btn/Btn";

function Users(props) {
    var dispatch = useDispatch()
    var allUsers = useSelector(state => state.userServer.users);
    return (
        <div>
            <Btn onClick={() => {
                dispatch(fetchUsers());
                }
            }>Download users</Btn>
            <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, width: `80%`, marginLeft: `10%`, minHeight: `65vh`, alignContent: `center` }}>
                {allUsers.map((user) => {
                        return(
                            <div key={Date.now() + user.id} style={{display: `flex`, width: `50%`, border: `1px solid #141414`, padding: `15px 20px 10px 15px`}}>
                                <h3>{user.id}.{user.name}</h3>
                            </div>
                        )
                
                })}
            </div>
        </div>
    );
}

export default Users;