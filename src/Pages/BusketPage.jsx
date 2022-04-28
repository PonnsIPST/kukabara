import React from "react";
import MyHeader from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Busket from "../Components/Busket/Busket";
import "../style/style.css";
import { MyDiv } from "../App";
import { ThemeProvider } from "styled-components";
import { theme } from "../App";


function BusketPage() {

    return (
        <ThemeProvider theme={theme}>
            <MyDiv className="Main">
                 <MyHeader />
                 <Busket />
                 <Footer />
            </MyDiv>
        </ThemeProvider>
    );
}

export default BusketPage;
