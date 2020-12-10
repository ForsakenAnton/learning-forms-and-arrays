import React, { useState } from 'react';

export default function ValidationForm() {

    let [name, setName] = useState("");
    let [age, setAge] = useState(0);

    let colorName = name.length > 2 ? "green" : "red"; //"yellow";
    let colorAge = age > 0 ? "green" : "red";//"yellow";

    const handleSubmit = event => {
        event.preventDefault();
        if (colorName === "red" || colorAge === 'red') { //не самая лучшая форма валидации
            alert("Че не заполнил форму!??");
        } else {
            alert(`Name: ${name} Age: ${age}`);
        }
    }

    const handleNameChanged = event => {
        // colorName = event.target.value.length > 2 ? "green" : "red";
        setName(event.target.value);
    }

    const handleAgeChanged = event => {
        setAge(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter name" value={name} onChange={handleNameChanged} style={{ border: "4px solid " + colorName }}></input>
            </div>

            <div>
                <label>Age</label>
                <input type="number" placeholder="Enter age" value={age} onChange={handleAgeChanged} style={{ border: "4px solid " + colorAge }}></input>
            </div>
            <input type="submit" value="Отправить"></input>
        </form>
    )
}