import React from "react";
import styled from "styled-components";
import Btn from "../../UI/Btn/Btn";

const ItemInRow = styled.div`
    width: 300px;
    height: 400px;
    display: inline-block;
    color: black;
    padding: 25px 20px 15px 20px;
    border: 2px solid #141414;
    border-radius: 5px;
    margin-top: 30px;
    & ~ &{
        margin-left: 15px;
    }
`


const Item = function (props) {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    }
    if (!props.item.buttonText) {
        return (
            <ItemInRow>
                <h3>{props.item.title}</h3>
                <span style={{ fontSize: `15px`, marginBottom: `15px`, display: `inline-block` }}>{props.item.date.toLocaleString("ru", options)}</span>
                <p style={{ marginBottom: `30px` }}>{props.item.addInfo}</p>
                <Btn onClick={() => props.remove(props.item)}>Delete item</Btn>
            </ItemInRow>
        )
    }
    return (
        <ItemInRow>
            <h3>{props.item.title}</h3>
            <span style={{ fontSize: `15px`, marginBottom: `15px`, display: `inline-block` }}>{props.item.date.toLocaleString("ru", options)}</span>
            <p style={{ marginBottom: `30px` }}>{props.item.body}</p>
            <p style={{ marginBottom: `30px` }}>{props.item.addInfo}</p>
            <Btn>{props.item.buttonText}</Btn>
            <Btn onClick={() => props.remove(props.item)}>Delete item</Btn>
        </ItemInRow>
    )
   }

export default Item;