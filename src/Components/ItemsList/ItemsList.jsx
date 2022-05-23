import React, {useState} from "react";
import Btn from "../../ui/Btn/Btn";
import Input from "../../ui/Input/Input";
import Item from "../Item/Item";
import Select from "../../ui/Select/Select";
import { useMemo } from "react";
import { useSelector } from "react-redux";


const ItemsList = function (props) {
    const valid = props.valid;
    valid();
    const isAuth = (useSelector(state => state.auth.auth));

    const items = props.items;
    const setItems = props.setItems;

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
            if (selectedSort === 'price') {
                return [...items].sort((a, b) => parseInt(a.buttonText) - parseInt(b.buttonText));
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
                <h2>{props.sectionTitle}</h2>
                <div className="container">
                    <div className="row">
                        <Select value={selectedSort} onChange={sortItems} defValue={'Sort'} options={props.options} />
                        <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search" />
                    </div>
                    {sortAndSearch.length !== 0 ?
                        <div className="row">

                            {sortAndSearch.map((item) =>
                                <Item remove={removeItem} item={item} key={item.id} />
                            )}
                        </div>
                        :
                        <h2>{props.noItemsFoundText}</h2>
                    }
                </div>

                {isAuth
                    ?
                    <form>
                        <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Название айтема" />
                        <Input value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Текст айтема" />
                        <Input value={addInfo} onChange={e => setAddInfo(e.target.value)} type="text" placeholder="Доп информация" />
                        <Input value={buttonText} onChange={e => setButtonText(e.target.value)} type="text" placeholder="Текст кнопки" />
                        <Btn onClick={addNewItem}>New Item</Btn>
                    </form>
                    :
                    <div></div>
                }
            </section>
        );
}

export default ItemsList;