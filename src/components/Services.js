import React,{Component} from 'react';
import Title from './Title'
import {FaBeer,FaHiking,FaShuttleVan,FaCocktail} from 'react-icons/fa'

export default class SingleRoom extends Component {
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "Free Cocktails",
                info : "We provide you free cocktails "

            },
              {
                icon : <FaHiking/>,
                title : "Free Cocktails",
                info : "We provide you free cocktails  dsakhfkldsa lkjfljkda sadfljad"

            },
              {
                icon : <FaBeer/>,
                title : "Free Cocktails",
                info : "We provide you free cocktails djfkjadf djfjlad jksdfajkhfd "

            },
              {
                icon : <FaShuttleVan/>,
                title : "Free Cocktails",
                info : "We provide you free cocktails hdofhjahfjha hhjhdajffsd "

            },





        ]
    }
    render (){
        return (<section className="services">
            <Title title="Services"/>
            <div className="services-center">
            {this.state.services.map((item,index) =>{ 
                return (<div>
                <article key ={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    </div>)
            })}





            </div>
            </section>
            
        );
    }
}
