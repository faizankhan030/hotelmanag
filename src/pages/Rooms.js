import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Rooms = () => {
  return (
    <div>
        <Hero hero="roomsHero">
            <Banner title="OUR ROOMS">
                <Link to="/" className="btn-primary">Go to Home</Link>
                </Banner>
            
            </Hero>
       
    </div>
  );
}

export default Rooms;
