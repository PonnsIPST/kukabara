import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../UI/Btn/Btn";

const BusketDiv = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-left: 10%;
    & div{
        border: 2px solid #141414;
        width: 100%;
        min-height: 60px;
        flex-direction: column;
        justify-content: space-between;
    }
`

const Busket = () => {
    const busket = useSelector(state => state.busket.goodsInBusket);
    const dispatch = useDispatch();
    let busketSum = useSelector(state => state.busket.price);
    
    const removeGood = (good) => {
        dispatch({ type: 'goodsInBusket', payload: good.id })
    }
    const removeAll = () => {
        dispatch({ type: 'clear' });
    }
    if (busket) {
        return (
            <section>
                <BusketDiv>
                    {busket.map((good) =>
                        <div key={good.id}>
                            <h3>{good.index}</h3>
                            <h3>{good.title}</h3>
                            <h3>{good.buttonText}</h3>
                        </div>
                    )}
                    
                    <Btn onClick={() => removeAll()}>Clear</Btn>
                </BusketDiv>
            </section>
        )
    }
    return (
        <section>
            <h1>U'r busket is empty</h1>
        </section>
        )
}

export default Busket;