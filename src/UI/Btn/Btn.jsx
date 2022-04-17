import React from "react";
import styled from "styled-components";


const Btn = function ({ children, ...props }) {
    return (
        <button {...props}>{children}</button>
    );
};

export default Btn;