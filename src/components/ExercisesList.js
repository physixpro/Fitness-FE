import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <ul>
        <li>{props.exercise.username}</li>
        <li>{props.exercise.description}</li>
        <li>{props.exercise.duration}</li>

        <Link to = {"edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        
    </ul>
)

class ExercisesList extends Component{

    constructor(){
        super();

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state =  {exercises: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({exercises: response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

exerciseList(){
    return this.state.exercises.map(currentexercise => {
        return <Exercise exercise = {currentexercise} deleteExercise = {this.deleteExercise} key={currentexercise._id}/>;
    })
}

    render(){
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <header className="thead-light">
                        <ul>
                            <li>Username</li>
                            <li>Description</li>
                            <li>Duration</li>
                            <li>Actions</li>
                        </ul>
                    </header>
                    <body>
                        {this.exerciseList()}
                    </body>
                </table>
            </div>
        )
    }
}

export default ExercisesList;