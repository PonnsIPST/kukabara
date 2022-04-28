import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";
import logo from "../../image/logo.jpg";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../Async/authorize";

const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    height: 15vh;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.main};
`
const LogoBlock = styled.div`
    display: flex;
    justify-content: start;
    width: 30%;
`
const HeaderRight = styled.div`
    display: flex;
    justify-content: start;
    width: 70%;
    flex-direction: ;
`


const MyHeader = () => {
    const [modal, setModal] = useState(false);
    const [userLogin, setUserLogin] = useState('tulyavkoilya@yandex.ru');
    const [userPassword, setUserPassword] = useState('test123123');
    const dispatch = useDispatch();

    if (1 == 2) {
        dispatch({ type: 'auth', payload: true });
            return (
            <Header className="header dark">

                <LogoBlock>
                    <img src={logo} alt="logo" />
                </LogoBlock>
                <HeaderRight>
                    <div className="row">
                        <Btn>Корзина</Btn>
                    </div>
                </HeaderRight>
            </Header>
        
        );
    }
    return (
        <Header className="header dark">

            <Modal display={modal} setDisplay={setModal}>
                <Input type="username" value={userLogin} onChange={e => setUserLogin(e.target.value)} placeholder="Введите логин" />
                <Input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Введите пароль" />
                <Btn onClick={
                    () => dispatch(getUserToken(userLogin, userPassword))
                }>Войти</Btn>
            </Modal>

            <LogoBlock>
                <img src={logo} alt="logo" />
            </LogoBlock>
            <HeaderRight>
                <div className="row">
                    <Btn onClick={() => setModal(true)}>Войти</Btn>
                </div>
            </HeaderRight>
        </Header>
    );
    
};

export default MyHeader;