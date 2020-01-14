import React, { Component } from "react";
// import Background from "./Background.jpg"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import sample from "./sample.mp4";


class Main extends Component {
  render() {
    return (
      <div>
        
        <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>


<div className="mainLine">
<h1 className="title">Awarded best get away of 2020
"Resort Official Magazine"</h1>



</div>

                


     
      </div>
    );
  }
}

export default Main;
