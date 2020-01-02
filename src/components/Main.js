import React, { Component } from "react";
import video from './video.mp4'

class Main extends Component {
  render() {
    return (
      <div>
        <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>

                


     
      </div>
    );
  }
}

export default Main;
