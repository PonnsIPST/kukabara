import React from "react";
import styled from "styled-components";
import MyHeader from "./Components/Header/Header";
import { ThemeProvider } from "styled-components";
import Banner from "./Components/Banner/Banner";
import './style/style.css';
import Blog from "./Components/Blog/Blog";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";

const MyDiv = styled.div`
  font-size: 14px;
  color: #141414;
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

const theme = {
  main: "#141414",
  sec: "white",
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyDiv className="App">
        <MyHeader/>
        <Banner />
        <Blog noItemsFoundText="No items found" sectionTitle='Our latest news'/>
        <Feedback/>
        <Footer/>
      </MyDiv>
    </ThemeProvider>
  );
}

export default App;
