import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import BusketPage from "./Pages/BusketPage";
import "./style/style.css";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Main from "./Pages/Main";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Users from "./Pages/Users";
import MyHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useSelector } from "react-redux"
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
    const userHasToken = (useSelector(state => state.auth.token));
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <MyDiv>
                    <MyHeader/>
                        <Routes>
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/busket" element={<BusketPage />} />
                            {userHasToken ?
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
                            <Route index element={<Main />} />
                        </Routes>
                    <Footer/>
                </MyDiv>
            </ThemeProvider>
        </Router>
    );
}

export default App;
