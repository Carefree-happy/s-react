import React, { useState, useRef } from 'react';

export default function UseStateTest() {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    // 表单新增中的ref，useRef
    const inputRef = useRef(null);
    const handleAdd = () => {
        if (text) {
            setList([...list, text]);
            setText("");
            inputRef.current.focus();
        }
    };

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleEdit = (index) => {
        const newText = prompt("Enter new text:", list[index]);
        if (newText) {
            const newList = [...list];
            newList[index] = newText;
            setList(newList);
        }
    };

    return (
        <div>     
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={inputRef}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
