import React, {Component} from 'react';
import axios from 'axios';


class CreateUser extends Component{

constructor(){
    super();

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
    }
}

onChangeUsername(e){
    this.setState({
        username: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    const user = ({
        username: this.state.username,
    })

    console.log(user)


    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
        username: ''
    })
}

    render(){
        return(
            <div className="form-grid">
               <h3 id="form-header">Here At Escondida We Are constantly Working Hard To Make Your Trip More Enjoyable, Feel Free To Take Our Extremely Short Questionnaire </h3>
               <form onSubmit = {this.onSubmit}>
                   <div className = "form-group">
                       <label>What's Your Name? </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}
                       />
                   </div>
                   <div className = "form-group">
                       <input type = "submit" value = "Submit Name" className= "btn btn-primary" />
                   </div>
                   </form>
                   



            </div>
        )
    }
}

export default CreateUser;