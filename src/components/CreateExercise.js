import React, {Component} from 'react';
import axios from 'axios';
import couple from "./couple.jpg"

class CreateExercise extends Component{

    constructor(){
        super()


this.onChangeUsername = this.onChangeUsername.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.onChangeDuration = this.onChangeDuration.bind(this);
this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username:'',
            description: '',
            duration: 0,
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
        
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    

        

    onSubmit(e) {
        e.preventDefault();

        const exercise = ({
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration
        })

        console.log(exercise)

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));

        window.location = '/';
    }
    render(){
        return(
            <div>
               
               <form onSubmit={this.onSubmit}>
                  
                   <div className="form-group">
                   <img id="couple" src={couple} alt="couple walking on beach" width="1269" height="560"/>
                       <h1 id="form-header">We Would Like To Know A little About Your Vacation</h1>
                       <label id="questionOne">Is This A Family Vacation Or Solo Trip? </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.description}
                       onChange={this.onChangeDescription}
                       />
                   </div>
                   <div className="form-group">
                       
                       <label id="questionTwo">How Many Days Are You Staying For?</label>
                       <input 
                       type="text"
                       className="form-controller"
                       value={this.state.duration}
                       onChange={this.onChangeDuration}
                       />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Submit Details" className="btn"/>
                   </div>

                  
               </form>

              
            </div>
        )
    }
}

export default CreateExercise;