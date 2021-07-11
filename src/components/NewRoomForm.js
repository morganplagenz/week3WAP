import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined)

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int:'');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invaid input')
        }
    };

    return (
        <div>
            <h5>Add A New Room</h5>
            {/* CRUD Update portion of assignment */}
            <form onSubmit={onSubmit}>
                <input  
                    type='text'
                    placeholder='Room Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input className="m-3"  
                    type='text'
                    placeholder='Area of Room'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit' className="btn btn-primary btn-sm m-2">Build Room</button>
            </form>
        </div>
    )
    
}