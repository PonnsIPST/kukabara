import React, {useState} from "react";
import Btn from "../../UI/Btn/Btn";
import Input from "../../UI/Input/Input";
import Item from "../Item/Item";


const Blog = function () {
    const [items, setItems] = useState([
        { id: 1, title: 'Заголовок айтема', body: 'Текст айтема', addInfo: 'Дополнительное поле' },
        { id: 2, title: 'Заголовок айтема', body: 'Текст айтема', addInfo: 'Дополнительное поле' },
        { id: 3, title: 'Заголовок айтема', body: 'Текст айтема', addInfo: 'Дополнительное поле' }
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [addInfo, setAddInfo] = useState('')
    const addNewItem = (e) => {
        e.preventDefault()
        const newItem = {
            title,
            body,
            id: Date.now()
        }
        setItems([...items, newItem])
        setTitle('')
        setBody('')
        setAddInfo('')
    }
    return (
        <section>
            <h2>Свежее из нашего блога</h2>
            <div className="container">
                <div className="row">
                    {items.map((item) =>
                        <Item item={item} key={item.id}/>
                    )}
                </div>
            </div>
            <form>
                <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Название айтема" />
                <Input value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Текст айтема" />
                <Input value={addInfo} onChange={e => setAddInfo(e.target.value)} type="text" placeholder="Доп информация" />
                <Btn onClick={addNewItem}>Добавить айтем</Btn>
            </form>
        </section>
    );
}

export default Blog;