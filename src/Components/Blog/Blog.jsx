import React, {useState} from "react";
import Btn from "../../UI/Btn/Btn";
import Input from "../../UI/Input/Input";
import Item from "../Item/Item";
import Select from "../../UI/Select/Select";


const Blog = function () {
    const [items, setItems] = useState([
        { id: 1, title: 'b', body: 'Текст айтема', addInfo: 'Дополнительное поле', buttonText: '' },
        { id: 2, title: 'a', body: 'Текст айтема', addInfo: 'Дополнительное поле', buttonText: '' },
        { id: 3, title: 'c', body: 'Текст айтема', addInfo: 'Дополнительное поле', buttonText: '12 000 p.' }
    ])
    const removeItem = (item) => {
        setItems(items.filter(p => p.id !== item.id))
    }
    const sortItems = (sort) => {
        setSelectedSort(sort);
        console.log(sort);
        setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    const [selectedSort, setSelectedSort] = useState('')
    const [title, setTitle] = useState('')
    const [buttonText, setButtonText] = useState('')
    const [body, setBody] = useState('')
    const [addInfo, setAddInfo] = useState('')
    const addNewItem = (e) => {
        e.preventDefault()
        const newItem = {
            title,
            body,
            id: Date.now(),
            addInfo,
            buttonText
        }
        setItems([...items, newItem])
        setTitle('')
        setBody('')
        setAddInfo('')
        setButtonText('')
    }
    if(items.length !== 0)
    return (
        <section>
            <h2>Свежее из нашего блога</h2>
            <div className="container">
                <div className="row"><Select value={selectedSort} onChange={sortItems} defValue={'Сортировать'} options={[{ value: 'title', name: 'По названию' }]} /></div>
                <div className="row">
                    {items.map((item) =>
                        <Item remove={removeItem} item={item} key={item.id}/>
                    )}
                </div>
            </div>
            <form>
                <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Название айтема" />
                <Input value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Текст айтема" />
                <Input value={addInfo} onChange={e => setAddInfo(e.target.value)} type="text" placeholder="Доп информация" />
                <Input value={buttonText} onChange={e => setButtonText(e.target.value)} type="text" placeholder="Текст кнопки" />
                <Btn onClick={addNewItem}>Добавить айтем</Btn>
            </form>
        </section>
        );
    return (
        <section>
            <h2>На данный момент ничего :(</h2>
        </section>
        )
}

export default Blog;