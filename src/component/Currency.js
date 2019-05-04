import React from "react";
import './Coin.css';
const Currency = (props) => {
    return (
        <div class="currienies">
             <header><h1 className="title ">{props.data.name}</h1></header>
             <div>
            <p  className="listItem"><strong className="break">MarketCap:</strong>{props.data.marketCap}</p>
            <p  className="listItem">Price:{props.data.price}</p>
            <p  className="listItem">PercentChange24h:{props.data.percentChange24h}</p>
            <p  className="listItem">Rank:{props.data.rank}</p>
            </div>
        </div>
    )
};

export default Currency;