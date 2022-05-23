import React from "react";
import Banner from "../components/Banner/Banner";

function Main(props) {
    const valid = props.valid;
    valid();
    return (
         <Banner />
    );
}

export default Main;
