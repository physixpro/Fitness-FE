import React, {Component} from 'react';
import relax from "./relax.jpg";
import relaxtwo from "./relaxtwo.jpg";

class Cardstwo extends Component{

    constructor(){
        super();
        this.state = {
            imgSrc: require('./relax.jpg')
        };
        this.handleMouseOver=this.handleMouseOver.bind(this);
        this.handleMouseOut=this.handleMouseOut.bind(this);
    }

    handleMouseOver(){
        this.setState({
            imgNew: require('./relaxtwo.jpg')
        });
    }

    handleMouseOver(){
        this.setState({
            imgNew: require('./relax.jpg')
        });
    }
    render(){
        return(
            <div className="cardstwo">
<img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.img}/>
            </div>
        )
    }
}

export default Cardstwo;