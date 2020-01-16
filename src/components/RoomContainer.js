import React from 'react';
import RoomList from './RoomList'
        
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import {RoomConsumer} from '../context'

export default function RoomContainer(){
    return(
    <RoomConsumer >{
        (value) => {
            console.log(value)
            
            return(<div>
 Hello from Room Container
    <RoomFilter/>
  <RoomList />
        </div>)}}
        </RoomConsumer>
)
}