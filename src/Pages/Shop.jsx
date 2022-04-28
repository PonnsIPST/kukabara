import React from "react";
import MyHeader from "../Components/Header/Header";
import { ThemeProvider } from "styled-components";
import ItemsList from "../Components/ItemsList/ItemsList";
import Footer from "../Components/Footer/Footer";
import { useState } from "react"
import "../style/style.css";
import { MyDiv } from "../App";



const theme = {
    main: "#141414",
    sec: "white",
}
function Shop() {

    const [goods, setGoods] = useState([
        { id: 10, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '15000 r', date: new Date('December 17, 1990 03:24:00') },
        { id: 11, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '45000 r', date: new Date('December 17, 1991 03:24:00') },
        { id: 12, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12000 r', date: new Date('December 17, 2003 03:24:00') },
        { id: 13, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '20 r', date: new Date('December 17, 1996 03:24:00') },
        { id: 14, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '90000 r', date: new Date('December 17, 1996 03:24:00') },
        { id: 15, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12000 r', date: new Date('December 17, 2000 03:24:00') },
        { id: 16, title: 'Post abt kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '1 r', date: new Date('December 17, 1923 03:24:00') },
        { id: 17, title: 'Second post abt kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '2 r', date: new Date('December 17, 1998 03:24:00') },
        { id: 18, title: 'Post wia button', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12000 r', date: new Date('December 17, 2000 03:24:00') }
    ]);

    return (
        <ThemeProvider theme={theme}>
            <MyDiv className="Main">
                <MyHeader />
                <ItemsList items={goods} setItems={setGoods} noItemsFoundText="No goods found" sectionTitle='Our Best goods' options={[
                    { value: 'title', name: 'by name' },
                    { value: 'price', name: 'by price' },
                    { value: 'date', name: 'by date' }
                ]} />
                <Footer />
            </MyDiv>
        </ThemeProvider>
    );
}

export default Shop;
