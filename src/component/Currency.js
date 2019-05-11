import React from "react";
import './Coin.css';
const Currency = (props) => {
    return (
        <div className="currienies">
             <div className="coinnames">
             <h1 className="title ">{props.data.name}</h1>
             </div>
             <div>
            <p  className="listItem"><strong className="break">MarketCap: </strong>{props.data.marketCap}</p>
            <p  className="listItem">Price : {props.data.price}</p>
            <p  className="listItem">PercentChange24h : {props.data.percentChange24h}</p>
            <p  className="listItem">Rank : {props.data.rank}</p>
            </div>
        </div>
    )
};

export default Currency;