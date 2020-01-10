import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comfort from "./comfort.jpg"


export default class SimpleSlider extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <Slider className="slide"{...settings}>
            <div>
              <h3>
                <img src={comfort} />
              </h3>
            </div>
            <div>
              <h3>
              <img src={comfort} />
              </h3>
            </div>
            <div>
              <h3>
              <img src={comfort} />
              </h3>
            </div>
            <div>
              <h3>
              <img src={comfort} />
              </h3>
            </div>
            <div>
              <h3>
              <img src={comfort} />
              </h3>
            </div>
            <div>
              <h3>
              <img src={comfort} />
              </h3>
            </div>
          </Slider>
        );
      }
    }
     
    