import { useState } from "react";

const allItems = [
    {id:'a', value:'apple'},
    {id:'o', value:'orange'},
    {id:'b', value:'banana'},
    {id:'p', value:'pear'},
]

const RenderingList = () =>{
    
    const [items, setItems] = useState(allItems)

    const addItem = () =>{
        setItems([...items, allItems.find(i => !items.includes(i))])
    }

    const removeItem = (item) =>{
        setItems(items.filter(i => i !== item))
    }

    return(
        <div>
            <button disabled={items.length >= allItems.length} onClick={addItem}>
                Add item
            </button>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>
                        <button onClick={() => removeItem(item)}>remove</button>
                        <label htmlFor={`${item.value}-input`}></label>
                        <input id={`${item.value}-input`} value={item.value} type="text" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RenderingList;