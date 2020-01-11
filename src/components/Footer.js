import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import footerImg from './footerImg.jpg';
import lastIcon from './lastIcon.jpg';
import file from './file.jpg';


class Footer extends Component {
  render() {
    return (
      <div>
        <div id="section-1">
        
            <img id="footer-img"src={footerImg} alt='logo'/>
            <div id="icons">
            <SocialIcon url="http://facebook.com" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://twitter.com" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://youtube.com" />&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="http://instagram.com" />
            </div>
            <div id="infoSection">
            <h5 id="info-1">200 PALENCIA RESORT WAY</h5>
            <h5 id="info-2">BUCARA, INDO</h5>
            <h5 id="info-3">(855) 741-2777</h5>
            <div id="info-line"></div>
        </div>
        <div id="info-line-2"></div>
        <div id="section-3">
            <ul>
                <li>ABOUT US</li>
                <li>DIRECTIONS</li>
                <li>CONTACT</li>
                <li>LOVE LOCALS</li>
            </ul>
           
        </div>
        <div id="section-4">
            <ul>
                <li>NEWS AND AWARDS</li>
                <li>CAREERS</li>
                <li>GIFT CARDS</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
         <p id="email-p">EMAIL&nbsp;SIGN&nbsp;UP</p>
        <SocialIcon network="email" id='mail'style={{ height: 30, width: 30 }} />
        </div>
       
        
        <div id="section-4"></div>
        <div id="section-5"></div>
      </div>
    );
  }
}

export default Footer;
