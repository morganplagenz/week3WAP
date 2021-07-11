import React from 'react';
import {NewRoomForm} from './NewRoomForm';

export const House = (props) => {
    const {house, updateHouse} = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !==roomId)
        };
        updateHouse(updatedHouse);
    }


    const addNewRoom = (room) => updateHouse({...house, rooms:[...house.rooms, room]});
    const rooms = () => (
        <ol>
            <br />
             <p>Current Rooms</p>
             {/* CRUD Read portion of assignment */}
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`Room Name: ${room.name} / Area: ${room.area}`}</label>
                    <button className="btn btn-danger btn-sm m-2" onClick={(e) => deleteRoom(room._id)} >Demolish Room</button> {/* CRUD Delete portion of assignment */}
                </li>
            ))}
        </ol>
    );

    return(
        <div class="container border p-3">
            <br />
            <h3>{house.name}</h3>
            <br />
            <NewRoomForm addNewRoom={addNewRoom} />

            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
        </div>
    );
};