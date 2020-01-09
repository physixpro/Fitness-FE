import React, {Component} from 'react';
import relax from "./relax.jpg";

class InfoSection extends Component{

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="info-grid">
               
                <h1 id="header-one">
                    A DELIGHTLY FRESH AND UNIQUE EXPERIENCE
                </h1>
                <p id="paragraph-one">
                    Stunning signature dining with breathtaking views of the Caribbean Sea. An inegmatic experience to top them all and at prices you can live with
                </p>
                <h2 id="header-two">
                    Explore our dining options 
                </h2>

            </div>
        )
    }
}


export default InfoSection;