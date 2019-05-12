import React, { Component } from 'react';
import './App.css';
import CurrenciesList from "./component/Currencies"
import SearchBar from "./component/Search"
import Header from "./component/Header"
import headerItem from "./component/HeaderItem"
import HeaderItem from './component/HeaderItem'
import BitcoinForm from "./component/BitcoinForm"
import { Route, NavLink, Switch } from "react-router-dom"
import Moment from 'react-moment';
import Clock from "./component/Clock"

const Home = (props) => {
  return (
    <div>
      <div>
        <Header toggleDiv={props.toddleDiv} />
        {props.state.show && <HeaderItem />}
      </div>
      <div className="header1">
        <div>
          <h1 className="header">Crypto Coin App</h1>
        </div>
        <div className="search">
          <SearchBar search={props.searchPersonName} />
        </div>
      </div>
      <CurrenciesList data={props.state.filterCurrencies.length ? props.state.filterCurrencies : props.state.currencies} />
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      filterCurrencies: [],
      show: false,
      curTime: null
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20`)
      .then((data) => {
        return data.json()
      }).then((res) => {
        this.setState({ currencies: res.currencies })
      })
  };

  searchPersonName = (e) => {
    this.setState({
      filterCurrencies: this.state.currencies.filter((currency) => {
        return currency.name.toUpperCase().includes(e.target.value.toUpperCase())
      })
    })
  }

  toddleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show })
  }

  render() {
    return (
      <div className="App">
        <div>

          <nav>

            <div className="navlink">
            <Clock/>
            </div>
            <div className="navlink">
              <NavLink className="navlink" to="/signup">Users</NavLink>
              <NavLink className="navlink" to="/Home">Home</NavLink>
            </div>
            <div className="navlink">
            </div>
          </nav>


          <Route
            exact path='/signup'
            render=
            {props =>
              <BitcoinForm />
            }
          />

          <Route
            exact path='/Home'
            render=
            {() =>
              <Home toddleDiv={this.toddleDiv} searchPersonName={this.searchPersonName} state={this.state}/>
            }
          />

        </div>
      </div>
    );
  }
}

export default App;