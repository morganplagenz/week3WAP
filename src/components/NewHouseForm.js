import React, { useState } from 'react';

export const NewHouseForm = () => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newHouse = {name};

        fetch('https://ancient-taiga-31359.herokuapp.com/api/houses', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newHouse)
        }).then(() => {
            console.log('new house added')
        })
    }
        {/* CRUD Create portion of assignment */}
        return (
        <div className="container">
        <h2>Add A New House</h2>
        <form onSubmit={onSubmit}>
            <input  
                type='text'
                placeholder='House Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <button type='submit' className="btn btn-success btn-sm m-2">Build House</button>
        </form>
        <br />
        <h2>Current Houses</h2>
    </div>
        )
    }
