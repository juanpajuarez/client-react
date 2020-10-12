import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch,Route} from 'react-router-dom';
import Cards from './components/Cards';
import CardsB from './components/Cards';

class Navbar extends Component{
    render(){
        return(
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container"><a id="logo-container" href="/#" className="center brand-logo">Proyecto 1</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/#">Publicaciones</a></li>
                    <li><a href="/#">Graficas</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;