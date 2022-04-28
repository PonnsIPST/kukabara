import React from "react";
import MyHeader from "../Components/Header/Header";
import { ThemeProvider } from "styled-components";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import "../style/style.css";
import { MyDiv, theme } from "../App";

function Main() {

    return (
        <ThemeProvider theme={theme}>
            <MyDiv className="Main">
                <MyHeader />
                <Banner />
                <Footer />
            </MyDiv>
        </ThemeProvider>
    );
}

export default Main;
