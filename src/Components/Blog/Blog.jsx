import React, {useState} from "react";
import Btn from "../../UI/Btn/Btn";
import Input from "../../UI/Input/Input";
import Item from "../Item/Item";
import Select from "../../UI/Select/Select";
import { useMemo } from "react";


const Blog = function (props, blogPosts) {


    const [items, setItems] = useState([
        { id: 1, title: 'Пост про кукабару', body: 'Длинный текст про кукабару', addInfo: 'Дополнительная информация про кукабару', buttonText: '', date: new Date('December 17, 1995 03:24:00') },
        { id: 2, title: 'Второй пост про кукабару', body: 'Ещё более длинный текст про кукабару', addInfo: 'Немного инфы про кукабару', buttonText: '', date: new Date('December 17, 1996 03:24:00') },
        { id: 3, title: 'Пост с кнопкой', body: 'Текст поста с кнопкой', addInfo: 'Купить кукабару', buttonText: '12 000 p.', date: new Date('December 17, 2000 03:24:00') }
    ])

    const removeItem = (item) => {
        setItems(items.filter(p => p.id !== item.id))
    }


    const sortItems = (sort) => {
        setSelectedSort(sort);
    }


    const [selectedSort, setSelectedSort] = useState('date')
    const [title, setTitle] = useState('')
    const [buttonText, setButtonText] = useState('')
    const [body, setBody] = useState('')
    const [addInfo, setAddInfo] = useState('')


    const sortedArray = useMemo(() => {
        if (selectedSort) {
            if (selectedSort === 'date') {
                return [...items].sort((a, b) => a.date.valueOf() - b.date.valueOf());
            }
            return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return items;
    }, [selectedSort, items]);

    const [searchQuery, setSearchQuery] = useState('');

    const sortAndSearch = useMemo(() => {
        return sortedArray.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedArray])

    const addNewItem = (e) => {
        e.preventDefault()
        const nowaday = new Date()
        const newItem = {
            title,
            body,
            id: Date.now(),
            addInfo,
            buttonText,
            date: nowaday
        }
        setItems([...items, newItem])
        setTitle('')
        setBody('')
        setAddInfo('')
        setButtonText('')
    }


    
    return (
        <section>
            <h2>{ props.sectionTitle }</h2>
            <div className="container">
                <div className="row">
                   <Select value={selectedSort} onChange={sortItems} defValue={'Сортировать'} options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'date', name: 'По дате' }
                    ]} />
                    <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Поиск" />
                </div>
                { sortAndSearch.length !== 0 ?
                <div className="row">
                    {sortAndSearch.map((item) =>
                        <Item remove={removeItem} item={item} key={item.id}/>
                    )}
                </div>
                    :
                    <h2>{props.noItemsFoundText}</h2>
                }
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
}

export default Blog;