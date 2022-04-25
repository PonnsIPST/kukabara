import React from "react";
import styled from "styled-components";
import MyHeader from "../Components/Header/Header";
import { ThemeProvider } from "styled-components";
import Banner from "../Components/Banner/Banner";
import ItemsList from "../Components/ItemsList/ItemsList";
import Footer from "../Components/Footer/Footer";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import Busket from "../Components/Busket/Busket";

const MyDiv = styled.div`
  font-size: 14px;
  color: #141414;
  & h1{
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
  & h2{
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin-top: 30px;
    text-align: center;
  }
  & h3{
    font-size: 30px;
    font-weight: normal;
    text-align: left;
  }
  & p{
    font-size: 24px;
    font-weight: normal;
  }
  & button{
    transition: .2s ease;
    height: 50px;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
  }
  & button ~ button{
    margin-left: 20px;
  }
`



const theme = {
    main: "#141414",
    sec: "white",
}
function Main() {
    const dispatch = useDispatch();
    var isAuth = useSelector(state => state.auth.token);
    isAuth ? isAuth = true : isAuth = false;
    dispatch({ type: 'auth', payload: isAuth });
    const [items, setItems] = useState([
        { id: 1, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '', date: new Date('December 17, 1990 03:24:00') },
        { id: 2, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '', date: new Date('December 17, 1991 03:24:00') },
        { id: 3, title: 'Post wout button', body: 'Post wout button text', addInfo: 'Buy kukabara', buttonText: '', date: new Date('December 17, 2004 03:24:00') },
        { id: 4, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '', date: new Date('December 17, 1993 03:24:00') },
        { id: 5, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '', date: new Date('December 17, 1996 03:24:00') },
        { id: 6, title: 'Post wout button', body: 'Post wout button text', addInfo: 'Buy kukabara', buttonText: '', date: new Date('December 17, 2000 03:24:00') },
        { id: 7, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '', date: new Date('December 17, 1996 03:24:00') },
        { id: 8, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '', date: new Date('December 17, 1996 03:24:00') },
        { id: 9, title: 'Post wout button', body: 'Post wout button text', addInfo: 'Buy kukabara', buttonText: '', date: new Date('December 17, 2005 03:24:00') }
    ]);
    const [goods, setGoods] = useState([
        { id: 10, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '15 000', date: new Date('December 17, 1990 03:24:00') },
        { id: 11, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '45 000', date: new Date('December 17, 1991 03:24:00') },
        { id: 12, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12 000', date: new Date('December 17, 2003 03:24:00') },
        { id: 13, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '20', date: new Date('December 17, 1996 03:24:00') },
        { id: 14, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '90 000', date: new Date('December 17, 1996 03:24:00') },
        { id: 15, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12 000', date: new Date('December 17, 2000 03:24:00') },
        { id: 16, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '1', date: new Date('December 17, 1923 03:24:00') },
        { id: 17, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '2', date: new Date('December 17, 1998 03:24:00') },
        { id: 18, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12 000', date: new Date('December 17, 2000 03:24:00') }
    ]);

    return (
        <ThemeProvider theme={theme}>
            <MyDiv className="Main">
                <MyHeader />
                <Banner />
                <ItemsList items={items} setItems={setItems} noItemsFoundText="No items found" sectionTitle='Our latest news' />
                <ItemsList items={goods} setItems={setGoods} noItemsFoundText="No goods found" sectionTitle='Our Best goods' />
                <Busket />
                <Footer />
            </MyDiv>
        </ThemeProvider>
    );
}

export default Main;
