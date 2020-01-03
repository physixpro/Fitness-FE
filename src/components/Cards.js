import React, {Component} from 'react';
import test from "./test.jpg";
import testone from "./testone.jpg"



class Cards extends Component {

    constructor(){
        super();
        this.state = {
            imgSrc:require('./testone.jpg')
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
        
    handleMouseOver(){
        this.setState({
            imgSrc: require('./test.jpg')
        });
    }

    handleMouseOut(){
        this.setState({
            imgSrc: require('./testone.jpg')
        });
    }
    


render(){
return(
        <div className="cards">
<img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/>

        </div>
    )
};

}
export default Cards;