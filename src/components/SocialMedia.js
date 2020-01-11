import React, {Component} from 'react';

class SocialMedia extends Component{
    render(){
        return(
            <div className="social-media-grid">
                <h2 id="social-media">
                   {this.props.social}
                </h2>
               

            </div>
        )
    }
}

export default SocialMedia;