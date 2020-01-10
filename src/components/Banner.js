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
  
        <img id="imgOne" src={second} />
        </ScrollAnimation>
       </div>
       <div id="sectionOne">
       <ScrollAnimation animateIn="fadeInUp">
  <h1 id="detail-one">{this.props.value}
  
  </h1>
  <div id="a-line"></div>
          
         
          </ScrollAnimation>
          </div>

          
            <div id="imgTwo">
            <ScrollAnimation animateIn="fadeInUp">
        <img src={comfort} />
        </ScrollAnimation>
       </div>
          <div id="sectionTwo">
           <h1 id="detail-two">{this.props.info}</h1> 
          
          </div>
          
        <img id="sushi"src={sushi} alt='sushi' width="500" height="900"/>
        
      </div>
    );
  }
}

export default Banner;
