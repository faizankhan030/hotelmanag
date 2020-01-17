import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'


const getUnique = (items,value) =>{
    return [...new Set(items.map(item =>item[value]))]
}

export default function RoomFilter({rooms}){
const context = useContext(RoomContext)
const { handleChange,price,minPrice,maxPrice,minSize,maxSize,type,capacity,breakfast,pets
} = context;
let types = getUnique(rooms,'type')
types = ['all',...types]
types = types.map((item,index) =>{
    return <option value={item} key={index}>{item}</option>
})
    return(<section className="filter-container">
        <Title title="Search Rooms"/>
        <form className="filter-form">
        {/*// select type*/}
        <div className="form-group">
        <label htmlFor="type">Room Type</label>
        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
        </select>
        </div>

        
        
        
        
        
        {/*//end of select type*/}
            </form>
        
        </section>)
}