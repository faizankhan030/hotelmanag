import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import '../App.css'
// import logo from './logo.svg';
// import './App.css';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (<nav className="navbar">
            <div className="nav-centre">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="BeachResort" />
                    </Link>
                    <button type="button" className="nav-btn"  >
                        <FaAlignRight className="nav-icon" onClick={this.handleToggle} />

                    </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>






                </ul>

            </div>
        </nav>

















        );
    }
}


