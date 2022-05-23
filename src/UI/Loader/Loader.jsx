import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin-top: 15vh;
    position: absolute;
    background-color: white;
    z-index: 999;
`
const MyLoader = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 25vh;
    border-radius: 50%;
    background: black;
    animation: rotate 1s infinite ease;
    @keyframes rotate {
        0% {
            width: 80px;
            height: 80px;
        }
        50% {
            width: 120px;
            height: 120px;
        }
        100% {
            width: 80px;
            height: 80px;
        }
    }
`

export const Loader = () => {
    return(
        <LoaderWrapper>
            {console.log('loading...')}
            <MyLoader/>
        </LoaderWrapper>
    )
}