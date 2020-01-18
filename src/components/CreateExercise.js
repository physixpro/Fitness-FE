import React, {Component} from 'react';
import axios from 'axios';
import couple from "./couple.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
           
               
             <div className="form-group">  

                 <form onSubmit={this.onSubmit}>
                    
                 <h1 className='heading'id="form-header"> 
                 <h1 id="header">We Would Like To Know A Little Bit<br /> About Your Vacation</h1>
                 <label id="questionOne">Is This A Family Vacation Or Solo Trip?
                       <input type="text"
                       required
                       placeholder="Family / Solo"
                       className="form-control"
                       value={this.state.description}
                       onChange={this.onChangeDescription}
                       />
                        </label>
                    
                   
                       <label id="questionTwo">How Many Days Are You Staying For?
                       <input 
                       type="text"
                       className="form-controller"
                       value={this.state.duration}
                       onChange={this.onChangeDuration}
                       />
                       </label>
                      
                      
         
                  
                       <input type="submit" value="SUBMIT" className="btn"/>
                  </h1>
               </form>
</div>
              
            
        )
    }
}

export default CreateExercise;