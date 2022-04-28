import React from "react";


const Btn = function ({ children, ...props }) {
    return (
        <a className="button" {...props}>{children}</a>
    );
};

export default Btn;