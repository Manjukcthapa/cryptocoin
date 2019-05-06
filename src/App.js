import React, { Component } from 'react';
import './App.css';
import  CurrenciesList from "./component/Currencies"
import SearchBar from "./component/Search"
import Header from "./component/Header"
import headerItem from "./component/HeaderItem"
import HeaderItem from './component/HeaderItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      filterCurrencies:[],
      show:false
      
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

  toddleDiv = () => {
    const{show} = this.state;
    this.setState({show:!show})
  }

  render() {
    return (
      <div className="App">
      <div>
      <Header toggleDiv={this.toddleDiv}/>
     { this.state.show && <HeaderItem/>}
      </div>
      <div className="header1">
      <div>
        <h1 className="header">Crypto Coin App</h1>
        </div>
        <div className="search">
        <SearchBar search = {this.searchPersonName}/>
        </div>
        </div>
        <CurrenciesList data={this.state.filterCurrencies.length ? this.state.filterCurrencies : this.state.currencies}/>
      </div>
    );
  }
}

export default App;