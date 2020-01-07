import React, { Component } from "react";
import run from './run.mp4'

class Main extends Component {
  render() {
    return (
      <div>
        <video className='videoTag' autoPlay loop muted>
       
    <source src={run} type='video/mp4' />
</video>

                


     
      </div>
    );
  }
}

export default Main;
