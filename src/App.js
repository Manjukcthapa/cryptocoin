import React, { Component } from 'react';
import './App.css';
import  CurrenciesList from "./component/Currencies"
import SearchBar from "./component/Search"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      filterCurrencies:[]
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

  searchPersonName = (e) => {
    this.setState({
      filterCurrencies:this.state.currencies.filter((currency) => {
         return currency.name.toUpperCase().includes(e.target.value.toUpperCase())
     })
    })
  }


  render() {
    return (
      <div className="App">
      <div>
        <h1 className="Header">Crypto Coin App</h1>
        </div>
        <SearchBar search = {this.searchPersonName}/>
        <CurrenciesList data={this.state.filterCurrencies.length ? this.state.filterCurrencies : this.state.currencies}/>
      </div>
    );
  }
}

export default App;