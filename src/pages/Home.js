import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


function Home() {
  return (
    <div>
        <Hero >
         <Banner title="Luxurious Rooms" subtitle="deluxe rooms starts with Rs.2000" >
        <Link to="/rooms" className="btn-primary">Our Rooms</Link></Banner>
     </Hero>
    
    <Services/>
    <FeaturedRooms />

  
    </div>
    
  );
}

export default Home;
