import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";
import logo from "../../image/logo.jpg";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../Async/authorize";
import { Link } from "react-router-dom";
import Navbar from "../../UI/Navbar/Navbar";

const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    height: 15vh;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.main};
    @media(max-width: 767px){
        height: 20vh;
    }
`
const LogoBlock = styled.div`
    display: flex;
    justify-content: start;
    width: 30%;
    @media(max-width: 767px){
        display: none;
    }
`
const HeaderRight = styled.div`
    display: flex;
    justify-content: start;
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
`


const MyHeader = () => {
    const [modal, setModal] = useState(false);
    const [userLogin, setUserLogin] = useState('tulyavkoilya@yandex.ru');
    const [userPassword, setUserPassword] = useState('test123123');
    const dispatch = useDispatch();
    const quit = () => {
        dispatch({ type: 'token', payload: '' });
        dispatch({ type: 'name', payload: 'Guest' });
    }

    if (useSelector(state => state.auth.token) !== "") {
            return (
              <Header className="header dark">

                <LogoBlock>
                    <img src={logo} alt="logo" />
                </LogoBlock>
                    <HeaderRight>
                        <div className="row" style={{ flexWrap: `wrap` }}>
                            <Link className="button" to="/busket">Your Busket</Link>
                            <Btn onClick={() => quit()}>Logout</Btn>
                        </div>
                </HeaderRight>
                <Navbar/>
              </Header>
        
        );
    }
    return (
        <Header className="header dark">

            <Modal display={modal} setDisplay={setModal}>
                <Input type="username" value={userLogin} onChange={e => setUserLogin(e.target.value)} placeholder="Enter u'r login" />
                <Input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Enter u'r pass" />
                <Btn onClick={
                    () => dispatch(getUserToken(userLogin, userPassword))
                }>Войти</Btn>
            </Modal>

            <LogoBlock>
                <img src={logo} alt="logo" />
            </LogoBlock>
            <HeaderRight>
                <div className="row" style={{ flexWrap: `wrap` }}>
                    <Link className="button" to="/busket">Your Busket</Link>
                    <Btn onClick={() => setModal(true)}>Login</Btn>
                </div>
            </HeaderRight>
            <Navbar />
        </Header>
    );
    
};

export default MyHeader;