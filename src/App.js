import React from 'react';
import './assets/css/App.css';
import Cards from './components/Cards';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom';
import CardsB from './components/CardsB';

function App() {
  return (
    
    <div className="App">
      
      <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container"><a id="logo-container" href="/#" className="center brand-logo">Proyecto 1</a>
                <Router>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/Cards">Publicaciones A</Link></li>
                    <li><Link to="/CardsB">Publicaciones B</Link></li>
                </ul>
                <Route path="/Cards" component={Cards}></Route>
                <Route path="/CardsB" component={CardsB}></Route>
                </Router>
                </div>
      </nav>
    </div>
    
  );
}

//ReactDOM.render(<App></App>,document.getElementById("root"));
export default App;
