import React,{Component} from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

// import './App.css';

export default class SingleRoom extends Component {
      constructor(props){
        super(props);
        this.state ={
            slug : this.props.match.params.slug,
            defaultBcg
        }
     
    }
    static contextType = RoomContext
    render (){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
       if(!room){
           return <div className="error">
                <br />
               <br />
                      <br />
               
               <h6> Rooms you are looking is un matched </h6>
               <Link to="/rooms" className="btn-primary">Go to Rooms </Link>
               </div>

       }
        const{name,capacity,size,breakfast,pets,description,price,extra,images} = room;
        return (<div>
            <Hero hero="roomsHero">
            <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">Back to rooms</Link>


            </Banner>
            </Hero>
       </div>);
    }
}


