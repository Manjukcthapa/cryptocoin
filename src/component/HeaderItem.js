import React from "react";
import computer from "../images/computer.jpg"
import secondImg from "../images/secondimg.jpg"
import thirdImg from "../images/thirdimg.jpg"
import forthImg from "../images/forthimg.jpg"

const HeaderItem = (props) => {
    return(
        
     <div className="mainhead" Name={props.className}>
    <div className="textitem">
      <img className="images" src={computer}/>
      <p>Happy 6th Birthday! DATA Alliance, Block Explorers and more</p>
      <date>May 1, 2019</date>
      </div>
       
       <div className="textitem">
    <img className="images" src={secondImg}/>
      <p>2019: Year of the DEX</p>
      <date>April 4, 2019</date>
      </div>

      <div className="textitem">
      <img className="images" src={thirdImg}/>
      <p>How blockchain will disrupt the communication industry</p>
      <date>March 22, 2019</date>
      </div>
      
      <div className="textitem">
      <img  className="images" src={ forthImg}/> 
      <p>Life After Trading: Cryptocurrencies In Everyday Life</p>
      <date>March 15, 2019</date>
      </div>
      
        </div>
    )
}

export default HeaderItem;