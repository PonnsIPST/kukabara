import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import BusketPage from "./pages/BusketPage";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Users from "./pages/Users";
import MyHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux"
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAuth, userName, userToken } from "./store/authReducer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  body{
    padding-top: 15vh;
  }

  #root {
    display: flex;
    justify-content: space-between;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    flex-basis: 100%;
    justify-content: center;
  }
  .container{
    display: flex;
    flex-basis: 1140px;
    flex-grow: 0;
    flex-direction: column;
  }
  .App{
    width: 100%;
  }
  section{
    padding-top: 50px;
    padding-bottom: 65px;
    color: #141414;
    background-color: rgb(255, 255, 255);
    min-height: 65vh;
  }
  section h2, section h3{
    padding: 10px 0 15px 0;
  }
  button, a.button {
    cursor: pointer;
    font-size: 18px;
    border: 3px solid white;
    color: white;
    background-color: #141414;
    display: inline-block;
    text-decoration: none;
    max-width: 200px;
    position: relative;
  }
  .button.busketButton{
    padding-right: 60px;
  }
  .busketCount{
    position: absolute;
    right: 7px;
    top: 7px;
  }
  .nomargin{
    margin-left: 0!important;
    margin-right: 0!important;
  }
  button ~ button, a.button ~ a.button {
    margin-left: 15px;
  }
  button:hover, a.button:hover{
    color: #141414;
    background-color: white;
    text-decoration: none;
  }

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    justify-content: space-around;
    min-height: 250px;
  }
  select{
    border: 3px solid #141414;
    padding: 15px;
    margin: 15px;
    border-radius: 5px 5px 0 0;
    min-width: 150px;
  }
  input{
    padding: 5px 15px 5px 15px;
    border: 3px solid #141414;
    min-width: 400px;
    display: flex;
  }
  .dark{
    color: white!important;
  }
  section:nth-child(even){
    background-color:rgb(231, 231, 231);
  }
  .inputWrapper{
    margin-top: 30px;
  }
  @media(max-width: 1200px) {
    .container {
        display: flex;
        flex-basis: 100%;
        flex-grow: 0;
        flex-direction: column;
    }
  }
  @media(max-width: 767px){
    button, a.button {
        font-size: 14px;
    }
    h1{
        font-size: 24px!important;
    }
    h2{
        font-size: 17px!important;
    }
    h3{
        font-size: 14px!important;
    }
    .container {
        display: flex;
        flex-basis: 100%;
        flex-grow: 0;
        flex-direction: column;
    }
  }

  @media(max-width: 409px) {
    header button, header a.button {
        margin-left: 0 !important;
    }
  }
`

export const MyDiv = styled.div`
  font-size: 14px;
  color: #141414;
  display: flex;
  flex-direction: column;
  width: 100%;
  & h1{
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
  & h2{
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin-top: 30px;
    text-align: center;
  }
  & h3{
    font-size: 30px;
    font-weight: normal;
    text-align: left;
  }
  & p{
    font-size: 24px;
    font-weight: normal;
  }
  & button{
    transition: .2s ease;
    height: 50px;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
  }
  & a.button{
    transition: .2s ease;
    height: 50px;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
  }
  & button ~ button{
    margin-left: 20px;
  }
`




export const theme = {
    main: "#141414",
    sec: "white",
}
function App() {
  var isAuth = useSelector(state => state.auth.auth);
  var userHasToken = useSelector(state => state.auth.token);
  var userHasName = useSelector(state => state.auth.name);
  const dispatch = useDispatch();

  async function validateUser() {
    if(userHasToken !== ''){
      try {
        const response = await axios.get('https://api.englishpatient.org/users/me',
          {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': userHasToken
              }
          }
        );
        if(response.data.username !== userHasName){
          forceUnauth();
        }
      } catch (error){
        console.log(error);
      }
    }
  }
  const forceUnauth = () => {
      dispatch(userAuth(false));
      dispatch(userName('Guest'));
      dispatch(userToken(''));
  }
    return (
        <Router> {console.log('draw App.js')}
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <MyDiv>
                    <MyHeader/>
                        <Routes>
                            <Route path="/shop" element={<Shop valid={validateUser}/>} />
                            <Route path="/blog" element={<Blog valid={validateUser}/>} />
                            <Route path="/busket" element={<BusketPage />} />
                            {isAuth ?
                                <Route path="/users" element={<Users />} />
                                : ""
                            }
                            <Route
                                path="/*"
                                element={
                                <div style={{ minHeight: `65vh`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                                        <h2>You are trying to move to a non-existent page or you don't have rights to observe it. I am really sorry.</h2>
                                    </div>
                                }
                            />
                            <Route index element={<Main valid={validateUser}/>} />
                        </Routes>
                    <Footer/>
                </MyDiv>
            </ThemeProvider>
        </Router>
    );
}

export default App;
