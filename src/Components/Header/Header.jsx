import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";
import logo from "../../image/logo.jpg";

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
    return (
        <Header className="header dark">
            <LogoBlock>
                <img src={logo} alt="logo" />
            </LogoBlock>
            <HeaderRight>
                <div className="row">
                    <Btn>Войти</Btn>
                    <Btn>Регистрация</Btn>
                </div>

            </HeaderRight>
        </Header>
    );
};

export default MyHeader;