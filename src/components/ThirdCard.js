import React, {Component} from 'react';
import aOne from './aOne.jpg';
import aOneHover from './aOneHover.jpg';
import aTwo from './aTwo.jpg';
import aTwoHover from './aTwoHover.jpg';
import aThree from './aThree.jpg';
import aThreeHover from './aThreeHover.jpg';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


class ThirdCard extends Component{


    constructor(){
      super();
      this.state = {
        box : <img src={aThree} width='600'/>
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
    }
  
    handleMouseOver(){
      this.setState({
        box: <img src={aThreeHover}width='600' 
        />
      });
      console.log("mouse over fired");
    }
  
  
    handleMouseOut(){
      this.setState({
        box:<img src={aThree} width='600'/>
      });
      console.log("mouse out fired");
  
    }
    render(){
      return(
        <ScrollAnimation animateIn="fadeInUp">
 <div className="boxes-grid">
  <div className="box-3" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> {this.state.box}  </div>
  
  
        </div>

        </ScrollAnimation>
       
      )
    }
  }
  
  export default ThirdCard;