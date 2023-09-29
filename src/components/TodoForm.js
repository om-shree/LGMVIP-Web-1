import React from "react";
import{ useState } from "react";

export default function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random() * 10000000),
            text:input,
            isComplete: false
        });
        setInput('');
    }

    return <form className="todo-form">
        <input type="text" onChange={handleChange} className="todo-input" placeholder="Add a todo" value={input} name="text"/>
        <button type="submit" onClick={handleSubmit} className="todo-btn">ADD TODO</button>
    </form>
}
