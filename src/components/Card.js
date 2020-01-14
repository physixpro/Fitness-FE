import React, { Component } from "react";
import test from "./test.jpg";
import bedroomone from "./bedroomone.jpg";
import bedroomtwo from "./bedroomtwo.jpg";
import relax from "./relax.jpg";
import relaxtwo from "./relaxtwo.jpg";
import yogacouple from "./yogacouple.jpg";
import Img from 'react-image'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.imagePathIn
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: this.props.imagePathOut
    });
    console.log("Mouse over fired");
  }

  handleMouseOut() {
    this.setState({
      imgSrc: this.props.imagePathIn
    });
    console.log("Mouse out fired");
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="cards">
        <Img id="test"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          src={require(`${this.state.imgSrc}`)}
        />
        <div>
  <h1>{this.props.heading}</h1>
  <p>{this.props.info}</p>
  </div>
      </div>
    );
  }
}
export default Card;
