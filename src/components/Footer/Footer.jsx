import React from "react";
import styled from "styled-components";
import logo from "../../image/logo.jpg";

const FooterBlock = styled.div`
    background-color: #141414;
    width: 100%;
    height: 20vh;
    display: flex;
`
const FooterContentBlock = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
`
const FooterInfoBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    & h2, & h3{
        text-align: right!important;
        margin-right: 30px;
    }
`
const FooterContent = () => {
    return(
        <FooterContentBlock>
            <img style={{ maxHeight: `150px`, maxWidth: `200px` }} src={logo} alt="logo" />
                  <FooterInfoBlock>
                      <h2>Компания КУКАБАРА</h2>
                      <h3>Телефон: 8 800 900 99 88</h3>
                      <h3>E-mail: example@beautiful-birds.tweet</h3>
                  </FooterInfoBlock>
             </FooterContentBlock>
    )
}

const Footer = () => {
    return(
        <FooterBlock className="dark">
            <FooterContent/>
        </FooterBlock>
    )
}

export default Footer;