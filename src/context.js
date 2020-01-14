import React,{Component} from 'react';
import items from './data'




const RoomContext = React.createContext();


class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        
        this.setState({
            rooms : rooms,
            sortedRooms : rooms,
            featuredRooms : featuredRooms,
            loading : false
        })
        
    }
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let rooms = {...item.fields,id,images}
              
            return rooms;
          
        })
        return tempItems

    }
    getRoom = slug =>{
        let TempRoom = [...this.state.rooms]
        const room = TempRoom.find((room)=>room.slug === slug)
        return room;
    }
    render (){
        return (<RoomContext.Provider value={{...this.state,getRoom:this.getRoom}} >
            {this.props.children}
            </RoomContext.Provider>);
    }
}

const RoomConsumer = RoomContext.Consumer;


export {RoomConsumer,RoomContext,RoomProvider}