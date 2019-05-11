import React from "react";
import './Coin.css';

const Header = (props) => {
return(
    <div>
        <div>
    <button className="Button" onClick={props.onClick} type="browser" onClick={props.toggleDiv}>browser</button>
    </div>
    </div>

)
}

export default Header;