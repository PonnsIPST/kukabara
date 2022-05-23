import React from "react";
import cl from "./Modal.module.css";


function Modal({ children, display, setDisplay}) {
    const modalClasses = [cl.popup]
    if (display) {
        modalClasses.push(cl.active);
    }
    return (
        <div className={[...modalClasses].join(' ')} onClick={() => setDisplay(false)}>
            <div className={cl.popupContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
        )
}

export default Modal;