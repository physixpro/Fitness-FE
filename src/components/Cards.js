import React, {Component} from 'react';
import run from 'run.jpg'

class Cards extends Component {

    constructor(){
        super();
        this.state = {
            imgSrc:'background-image: url(smile.jpg)'
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
        
    handleMouseOver(){
        this.setState({
            imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
        });
    }

    handleMouseOut(){
        this.setState({
            imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
        });
    }
    
}

render () {
    return(
        <div>
            <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/>
        </div>
    );


}
  




Cards.propTypes = {

}

Cards.defaultProps = {
    
}

export default Cards;