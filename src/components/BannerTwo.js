import React, {Component}from 'react';
import comfort from "./comfort.jpg";
import comforttwo from "./comforttwo.jpg"

class BannerTwo extends Component{
    render(){
        return(
            
            <div className="banner">
        <img id="imgone" src={comfort} />
        <div id="info">
          <h1>WORLD CLASS YOGA INSTRUCTION</h1>
          
          <button>BOOK NOW</button>
        </div>
        
        <img id="imgtwo" src={comforttwo} width='1000'/>
        <div id="infotwo">
        <h1>WORLD CLASS YOGA INSTRUCTION</h1>
          
          <button>BOOK NOW</button>
        </div>
        
      </div>
        )
    }
}

export default BannerTwo;