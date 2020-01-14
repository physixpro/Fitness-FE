import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comfort from "./comfort.jpg";
import calm from "./calm.jpg";
import cottage from "./cottage.jpg";
import sitting from "./sitting.jpg";
import wedding from "./wedding.jpg";
import wine from "./wine.jpg";
import facial from "./facial.jpg";
import { SocialIcon } from 'react-social-icons';



export default class SimpleSlider extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return(
          
            <Slider className="slide"{...settings}>
             
            <div>
              <h3>
                <img src={facial} width='600' height='420' />
                <div id="try">
                  <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny  <SocialIcon url="http://instagram.com" /></div>
                  
                </div>
              </h3>
            </div>
            <div>
              <h3>
              <img src={calm} width='600' height='420'/>
              <div id="try">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny<SocialIcon url="http://instagram.com" /></div>

              </div>
              
              </h3>
            </div>
            <div>
              <h3>
              <img src={cottage} width='600' height='420'/>
              <div id="try">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny<SocialIcon url="http://instagram.com" /></div>

              </div>
              </h3>
            </div>
            <div>
              <h3>
              <img src={sitting}width='600' height='420' />
              <div id="try">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny<SocialIcon url="http://instagram.com" /></div>

              </div>
              </h3>
            </div>
            <div>
              <h3>
              <img src={wedding} width='600' height='420'/>
              <div id="try">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny<SocialIcon url="http://instagram.com" /></div>

              </div>
              </h3>
            </div>
            <div>
              <h3>
              <img src={wine} width='600' height='420'/>
              <div id="try">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;&nbsp;&nbsp;&nbsp;Complete serenity in the heart of Destiny    
                  </h5>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;#Escondida#PrivateBeach #Destiny<SocialIcon url="http://instagram.com" /></div>

              </div>
              </h3>
            </div>
          </Slider>
        );
      }
    }
     
    