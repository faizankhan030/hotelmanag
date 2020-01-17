import React from 'react';
import Room from './Room'

export default function RoomList({rooms}){
   if(rooms.length===0){
       return (<div className="empty-search">
           <h3>OOPS !!! Unforfunately No rooms matches your search parameter</h3>
           </div>)
   }
    return(<section className="roomslist">
        <div className="roomslist-centre">
        {rooms.map(item =>{
        return <Room key={item.id} room={item} />})}
        </div>
        
        </section>)
}