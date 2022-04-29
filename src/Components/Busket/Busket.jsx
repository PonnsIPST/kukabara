import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../UI/Btn/Btn";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";

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
    const price = useSelector(state => state.busket.price);
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const removeAll = () => {
        dispatch({ type: 'clear' });
        dispatch({type: 'noPrice'})
    }
    if (busket.length > 0) {
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
                    <div><h2>Sum: {price} rur</h2></div>
                    <Btn onClick={() => removeAll()}>Clear</Btn>
                    <Btn className="nomargin button" onClick={() => setModal(true)}>Buy $$$</Btn>
                </BusketDiv>


                <Modal display={modal} setDisplay={setModal}>
                    <h3>Unfortunately, that functionality is still unavailible</h3>
                </Modal>
            </section>
        )
    }
    return (
        <section>
            <h1>U'r busket is empty :(</h1>
        </section>
        )
}

export default Busket;