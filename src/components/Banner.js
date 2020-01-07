import React, { Component } from "react";
import comfort from "./comfort.jpg";
import comforttwo from "./comforttwo.jpg"

class Banner extends Component {
  render() {
    return (
      <div className="banner">
      <div>
        <img id="imgOne" src={comfort} />
       </div>
       <div id="sectionOne">
  <h1>{this.props.value}</h1>
          
          <button>BOOK NOW</button>
          </div>

      
            <div id="imgTwo">
        <img src={comfort} />
       </div>
          <div id="sectionTwo">
           <h1>{this.props.info}</h1> 
          <button>BOOK NOW</button>
          </div>
          
        
        
      </div>
    );
  }
}

export default Banner;
