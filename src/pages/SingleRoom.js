import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }

    }
    static contextType = RoomContext
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <br />
                <br />
                <br />

                <h6> Rooms you are looking is un matched </h6>
                <Link to="/rooms" className="btn-primary">Go to Rooms </Link>
            </div>

        }
        const {name, capacity, size, breakfast, pets, description, price, extras, images} = room;
        const [mainImg, ...defaultImgs] = images;
        return (<div>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>


                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImgs.map((item, index) => {
                        return <img src={item} key={index} alt={name} />
                    }
                    )
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price : {price}</h6>
                        <h6>size : {size} sq.ft</h6>
                        <h6>Max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? `pets are allowed` : `No pets are allowed `}</h6>
                        <h6>{breakfast && "Free breakfast available"}</h6>
                    </article>
                </div>
                <article className="room-extras">
                    <h6>extras </h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>
                        })}
                    </ul>

                </article>







            </section>

        </div>);
    }
}


