import React, {Component} from 'react';

class SocialMediaTwo extends Component {

    render(){
        return(
            <div className="mediaTwo-grid">
                <h1 id="join">{this.props.join}</h1>
            </div>
        )
    }
}

export default SocialMediaTwo;