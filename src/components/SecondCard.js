import React, {Component} from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import aOne from './aOne.jpg';
import aOneHover from './aOneHover.jpg';
import aTwo from './aTwo.jpg';
import aTwoHover from './aTwoHover.jpg';
import aThree from './aThree.jpg';
import aThreeHover from './aThreeHover.jpg';




class Boxes extends Component{


    constructor(){
      super();
      this.state = {
        box : <img src={aTwo} width='600'/>
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
    }
  
    handleMouseOver(){
      this.setState({
        box: <img src={aTwoHover}width='600' 
        />
      });
      console.log("mouse over fired");
    }
  
  
    handleMouseOut(){
      this.setState({
        box:<img src={aTwo} width='600'/>
      });
      console.log("mouse out fired");
  
    }
    render(){
      return(
        <ScrollAnimation animateIn="fadeInUp">
        <div className="boxes-grid">
  <div className="box-2" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> {this.state.box}  </div>
  
  
        </div>
        </ScrollAnimation>
      )
    }
  }
  
  export default Boxes;