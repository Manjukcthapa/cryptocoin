import React from "react";

const HeaderItem = (props) => {
    return(
        
     <div className="mainhead" Name={props.className}>
    <div className="textitem">
      {/* <img src={}alt=""/> */}
      <p>Happy 6th Birthday! DATA Alliance, Block Explorers and more</p>
      <date>May 1, 2019</date>
      </div>
       
       <div className="textitem">
      {/* <img src={computer.jpg} alt="name"/>  */}
      <p>2019: Year of the DEX</p>
      <date>April 4, 2019</date>
      </div>

      <div className="textitem">
      <img src/>
      <p>How blockchain will disrupt the communication industry</p>
      <date>March 22, 2019</date>
      </div>
      
      <div className="textitem">
      <img/> 
      <p>Life After Trading: Cryptocurrencies In Everyday Life</p>
      <date>March 15, 2019</date>
      </div>
      
        </div>
    )
}

export default HeaderItem;