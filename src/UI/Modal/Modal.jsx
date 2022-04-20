import React from "react";
import styled from "styled-components";

const Popup = styled.div`
    positioN: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    background-color: rgba(150, 150, 150, .3);
    &.active{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div{
        padding: 50px;
        border: 3px solid #141414;
        border-radius: 5px;
        min-width: 300px;
        background-color: white;
    }
    & input ~ input{
        margin-top: 30px;
    }
    & input ~ button{
        margin-top: 20px;
    }
`


function Modal({ children, display, setDisplay, ...props }) {
    let opened = false;
    if (display) {
        let modalToOpen = document.getElementById(props.id);
        modalToOpen.className += " active";
        opened = true;
    }
    const closeModal = () => {
        if (display & (opened == true)) {
            let modalToClose = document.getElementById(props.id);
            if (modalToClose.className.substring(modalToClose.className.length - 7) === ' active') {
                modalToClose.className = modalToClose.className.substring(0, modalToClose.className.length - 7);
                setDisplay(false);
            }
        }
    }
    return (
        <Popup {...props} onClick={() => closeModal()}>
            <div>
                {children}
            </div>
        </Popup>
        )
}

export default Modal;