import React, { Component } from 'react';
import items from './data'




const RoomContext = React.createContext();


class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    }
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => { return item.price }))
        let maxSize = Math.max(...rooms.map(item => { return item.size }))

        this.setState({
            rooms: rooms,
            sortedRooms: rooms,
            featuredRooms: featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize

        })

    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let rooms = { ...item.fields, id, images }

            return rooms;

        })
        return tempItems

    }
    getRoom = slug => {
        let TempRoom = [...this.state.rooms]
        const room = TempRoom.find((room) => room.slug === slug)
        return room;
    }

    handleChange = (event) => {
        const target = event.target
        const value = event.type === 'checkbox'? target.checked : target.value;
        const name = event.target.name;
       this.setState({
           [name]:value
       },this.filterRooms)

       
       
    }

    filterRooms = () =>{
   let{rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state
   let tempRooms =[...rooms];
       if(type !==  'all'){
           tempRooms = tempRooms.filter(room =>  room.type === type);
           this.setState({
               sortedRooms:tempRooms
           })
    }
    }
    render() {
        return (<RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom,handleChange:this.handleChange }} >
            {this.props.children}
        </RoomContext.Provider>);
    }
}

const RoomConsumer = RoomContext.Consumer;


export { RoomConsumer, RoomContext, RoomProvider }