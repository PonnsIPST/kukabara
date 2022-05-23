import React from "react";
import styled from "styled-components";
import logo from "../../image/logo.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Btn from "../../ui/Btn/Btn";
import Modal from "../../ui/Modal/Modal";
import Input from "../../ui/Input/Input";
import Navbar from "../../ui/Navbar/Navbar";
import axios from "axios";
import { userAuth, userName, userToken } from "../../store/authReducer";
import { Loader } from "../../ui/Loader/Loader";

const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    height: 15vh;
    top: 0;
    left: 0;
    z-index: 99999;
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

const MyHeader = (props) => {
    const [modal, setModal] = useState(false);
    const [userLogin, setUserLogin] = useState('tulyavkoilya@yandex.ru');
    const [userPassword, setUserPassword] = useState('test123123');
    const dispatch = useDispatch();
    var isAuth = useSelector(state => state.auth.auth);
    var busket = useSelector(state => state.busket.goodsInBusket);
    var busketCount = 0;
    busket.map(busketItem => busketCount++);
    const [isLoading, setIsLoading] = useState(false);

    const quit = () => {
        dispatch(userToken(''));
        dispatch(userName('Guest'));
        dispatch(userAuth(false));
    }
    const handleAuth = async (userLogin, userPassword) => {
        if(userLogin !== "" && userPassword !== ""){
            try{
                setIsLoading(true);
                const response = await axios.post('https://api.englishpatient.org/login', JSON.stringify(
                    {
                        "email": userLogin,
                        "password": userPassword
                    }
                ),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                setIsLoading(false);

                if(typeof response.data.token !== 'undefined'){
                    dispatch(userToken(response?.data?.token));
                    dispatch(userName(userLogin));
                    dispatch(userAuth(true));
                }
                else{
                    alert('Неверный логин или пароль')
                }
            } catch (err) {
                console.log(err)
            }
        }else{
            alert('Заполнены не все нобходимые поля');
        }
    }

            return (
              <Header className="header dark">
                {isLoading === true ? <Loader/> : ""}
                {isAuth ? "" :
                    <Modal display={modal} setDisplay={setModal}>
                        <Input type="username" value={userLogin} onChange={e => setUserLogin(e.target.value)} placeholder="Enter u'r login" />
                        <Input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Enter u'r pass" />
                        <Btn onClick={() => handleAuth(userLogin, userPassword) }>Login</Btn>
                    </Modal>
                }
                <LogoBlock>
                    <img src={logo} alt="logo" />
                </LogoBlock>
                    <HeaderRight>
                        <div className="row" style={{ flexWrap: `wrap` }}>
                            <Link className="button" to="/busket">Your Busket<p className="busketCount">{busketCount}</p></Link>
                            {isAuth ? 
                                <Btn className="quitButton button" onClick={() => quit()}>Logout</Btn>
                                :
                                <Btn onClick={() => setModal(true)}>Login</Btn>
                            }
                        </div>
                </HeaderRight>
                <Navbar/>
              </Header>
        
        );

};

export default MyHeader;