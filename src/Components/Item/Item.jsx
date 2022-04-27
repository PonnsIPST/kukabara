import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux"
const ItemInRow = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: black;
    padding: 25px 20px 15px 20px;
    border: 2px solid #141414;
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
`


const Item = function (props) {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    }
    const dispatch = useDispatch();
    const toBusket = () => {
        dispatch({ type: 'toBusket', payload: props.item });
        dispatch({ type: 'price', payload: props.buttonText });
    }
    const isAuth = (useSelector(state => state.auth.token));
    if (!props.item.buttonText) {
        return (
            <ItemInRow>
                <h3>{props.item.title}</h3>
                <span style={{ fontSize: `15px`, marginBottom: `15px`, display: `inline-block` }}>{props.item.date.toLocaleString("ru", options)}</span>
                <p style={{ marginBottom: `30px` }}>{props.item.body}</p>
                <p style={{ marginBottom: `30px` }}>{props.item.addInfo}</p>
                {isAuth ? <Btn onClick={() => props.remove(props.item)}>Delete item</Btn> : <div></div> }
            </ItemInRow>
        )
    }
    return (
        <ItemInRow>
            <h3>{props.item.title}</h3>
            <span style={{ fontSize: `15px`, marginBottom: `15px`, display: `inline-block` }}>{props.item.date.toLocaleString("ru", options)}</span>
            <p style={{ marginBottom: `30px` }}>{props.item.body}</p>
            <p style={{ marginBottom: `30px` }}>{props.item.addInfo}</p>
            <Btn onClick={() => toBusket(props.item)}>{props.item.buttonText}</Btn>
            {isAuth ? <Btn onClick={() => props.remove(props.item)}>Delete item</Btn> : <div></div>}
        </ItemInRow>
    )
   }

export default Item;