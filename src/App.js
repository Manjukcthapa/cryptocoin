import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: []
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20`)
    .then((data) => {
       return data.json()
    }).then((res) => {
      this.setState({ currencies: res.currencies})
    })
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Crypto Coin App</h1>
      </div>
    );
  }
}

export default App;