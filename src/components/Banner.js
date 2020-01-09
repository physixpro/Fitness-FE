import React, { Component } from "react";
import comfort from "./comfort.jpg";
import second from "./second.jpg"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import sushi from "./sushi.jpg"

class Banner extends Component {
  render() {
    return (
      <div className="banner">
      <div>
      <ScrollAnimation animateIn="fadeInUp">
  
        <img id="imgOne" src={comfort} />
        </ScrollAnimation>
       </div>
       <div id="sectionOne">
       <ScrollAnimation animateIn="fadeInUp">
  <h1>{this.props.value}</h1>
          
          <button>BOOK NOW</button>
          </ScrollAnimation>
          </div>

      
            <div id="imgTwo">
        <img src={second} />
       </div>
          <div id="sectionTwo">
           <h1>{this.props.info}</h1> 
          <button>BOOK NOW</button>
          </div>
          
        <img id="sushi"src={sushi} alt='sushi' width="500" height="900"/>
        
      </div>
    );
  }
}

export default Banner;
