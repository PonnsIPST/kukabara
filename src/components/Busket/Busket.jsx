import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import Btn from "../../ui/Btn/Btn";
import { clearBusket, noPrice } from "../../store/busketReducer";

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
        dispatch(clearBusket());
        dispatch(noPrice())
    }
    if (busket.length > 0) {
        return (
            <section>
                <BusketDiv>
                    {busket.map((good) =>
                        <div style={{ padding: `0 15px 10px 15px`, display: `flex`, flexDirection: `row`, justifyContent: `space-between` }} key={good.id}>
                            <h3>{good.id}</h3>
                            <div style={{ width: `50%`, border: `none` }}><h3 style={{ textAlign: `center` }}>{good.title}</h3></div>
                            <div style={{ width: `15%`, border: `none`}}><h3>{good.buttonText}</h3></div>
                        </div>
                    )}
                    <div style={{ width: `100%`, border: `none` }}><h2 style={{ textAlign: `right` }}>Sum: {price} rur</h2></div>
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