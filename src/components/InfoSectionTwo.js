import React, {Component} from 'react';

class SideMenu extends Component{
    render(){
        return(
            <div className="second-info">
                <h1>VIEW ACTIVITIES</h1>

                <ul>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Fire Dancing</a></li>
                    <li><a href="#">Snorkeling</a></li>
                    <li><a href="#">Cuisine</a></li>
                    <li><a href="#">Hiking</a></li>
                    </ul>

            </div>
        )
    }
}

export default SideMenu;