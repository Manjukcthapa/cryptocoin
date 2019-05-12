import React from "react";
import computer from "../images/computer.jpg"
import secondImg from "../images/secondimg.jpg"
import thirdImg from "../images/thirdimg.jpg"
import forthImg from "../images/forthimg.jpg"

const HeaderItem = (props) => {
    return(
        
     <div className="mainhead" name={props.className}>
    <div className="textitem">
      <img className="images" src={computer} alt=""/>
      <p>Happy 6th Birthday! DATA Alliance, Block Explorers and more</p>
      <Date>May 1, 2019</Date>
      </div>
       
       <div className="textitem">
    <img className="images" src={secondImg} alt=""/>
      <p>2019: Year of the DEX</p>
      <Date>April 4, 2019</Date>
      </div>

      <div className="textitem">
      <img className="images" src={thirdImg} alt=""/>
      <p>How blockchain will disrupt the communication industry</p>
      <Date>March 22, 2019</Date>
      </div>
      
      <div className="textitem">
      <img  className="images" src={ forthImg} alt=""/> 
      <p>Life After Trading: Cryptocurrencies In Everyday Life</p>
      <Date>March 15, 2019</Date>
      </div>
      
        </div>
    )
}

export default HeaderItem;