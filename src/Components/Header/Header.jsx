import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";
import logo from "../../image/logo.jpg";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.auth);
    const authorize = () => {
        dispatch({ type: "auth", payload: true })
    }
    if (isAuth === false) {
        return (
            <Header className="header dark">
                <Modal id="regModal" display={modal} setDisplay={setModal}>
                    <Input placeholder="Введите логин" />
                    <Input placeholder="Введите пароль" />
                    <Btn onClick={
                        () => authorize()
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
    }
        return (
            <Header className="header dark">
                <LogoBlock>
                    <img src={logo} alt="logo" />
                </LogoBlock>
                <HeaderRight>
                    <div className="row">
                        <Btn onClick={() => console.log('111')}>Корзина</Btn>
                    </div>
                </HeaderRight>
            </Header>
        );
            
};

export default MyHeader;