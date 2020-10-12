import React, { Component } from 'react';

class CardsB extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        fetch("http://34.72.68.155:80/getNotas")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Cargando...</div>;
        } else {
          return (
            <div className="column">
                <div className="input-field col s12">
                </div>
                {items.map(item => (
                    <div className="row ">
                    <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <li key={item.autor}>
                    <span className="card-title">{item.autor}</span>
                    <p>{item.nota}</p>                   
                    </li>
                    </div>
                    </div>
                    </div>
                    </div>                    
                ))}
            </div>
          );
        }
    }
}

export default CardsB;