import React from "react";
import ItemsList from "../Components/ItemsList/ItemsList";
import { useState } from "react"
import "../style/style.css";


function Shop() {

    const [goods, setGoods] = useState([
        { id: 10, title: 'Little kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '15000 rur', date: new Date('December 17, 1990 03:24:00') },
        { id: 11, title: 'Medium kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '45000 rur', date: new Date('December 17, 1991 03:24:00') },
        { id: 12, title: 'Little-medium kukabara', body: 'Some text', addInfo: 'Buy kukabara', buttonText: '12000 rur', date: new Date('December 17, 2003 03:24:00') },
        { id: 13, title: 'Not really kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '20 rur', date: new Date('December 17, 1996 03:24:00') },
        { id: 14, title: 'Big kukabara', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '90000 rur', date: new Date('December 17, 1996 03:24:00') },
        { id: 15, title: 'Medium-little kukabara', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12000 rur', date: new Date('December 17, 2000 03:24:00') },
        { id: 16, title: 'Not even a kukabara', body: 'Long text abt kukabara', addInfo: 'Additional info abt kukabara', buttonText: '1 rur', date: new Date('December 17, 1923 03:24:00') },
        { id: 17, title: 'Some other not so bad bird', body: 'Very long text abt kukabara', addInfo: 'Some info abt kukabara', buttonText: '2 rur', date: new Date('December 17, 1998 03:24:00') },
        { id: 18, title: 'Just kukabara', body: 'Post wia button text', addInfo: 'Buy kukabara', buttonText: '12000 rur', date: new Date('December 17, 2000 03:24:00') }
    ]);

    return (
                <ItemsList items={goods} setItems={setGoods} noItemsFoundText="No goods found" sectionTitle='Our Best goods' options={[
                    { value: 'title', name: 'by name' },
                    { value: 'price', name: 'by price' },
                    { value: 'date', name: 'by date' }
                ]} />
    );
}

export default Shop;
