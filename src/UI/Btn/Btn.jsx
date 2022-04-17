import React from "react";


const Btn = function ({ children, ...props }) {
    return (
        <button {...props}>{children}</button>
    );
};

export default Btn;