import React from "react";
import ItemsList from "../components/ItemsList/ItemsList";
import { useState } from "react"


function Blog(props) {

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

    return (
                <ItemsList valid={props.valid} items={items} setItems={setItems} noItemsFoundText="No items found" sectionTitle='Our latest news' options={[
                    { value: 'title', name: 'by name' },
                    { value: 'date', name: 'by date' }
                ]} />
    );
}

export default Blog;
