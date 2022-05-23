import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navibar = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    background-color: #141414;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


const Navbar = () => {
    var userHasToken = useSelector(state => state.auth.token);
    return (
        <Navibar>
            <Link className="button" to="/">Main Page</Link>
            <Link className="button" to="/blog">Our Blog</Link>
            <Link className="button" to="/shop">Our Goods</Link>
            {userHasToken ?
                <Link className="button" to="/users">List of users</Link>
                :
                ""
            }
        </Navibar>
    )
}

export default Navbar;