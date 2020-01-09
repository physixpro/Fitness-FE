import React, {Component} from 'react';
import relax from "./relax.jpg";
import interior from "./interior.jpg"

class Boxes extends Component{


  constructor(){
    super();
    this.state = {
      box : <img src={relax}/>
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(){
    this.setState({
      box: <img src={interior} 
      />
    });
    console.log("mouse over fired");
  }


  handleMouseOut(){
    this.setState({
      box:<img src={relax}/>
    });
    console.log("mouse out fired");

  }
  render(){
    return(
      <div className="boxes-grid">
<div className="box-1" onMouseOver={this.handleMouseOver} onMouseOut={this.handlMouseOut}> {this.state.box}  </div>
<div className="box-1"> {this.state.box}  </div>
<div className="box-1" > {this.state.box}</div>

      </div>
    )
  }
}

export default Boxes;