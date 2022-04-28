import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import BusketPage from "./Pages/BusketPage";
import "./style/style.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Main from "./Pages/Main";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";

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
  & button ~ button{
    margin-left: 20px;
  }
`



export const theme = {
    main: "#141414",
    sec: "white",
}
function App() {

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/busket" element={<BusketPage/>}/>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
