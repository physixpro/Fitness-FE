import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CreateExercise from "./components/CreateExercise"
import ExerciseList from "./components/ExercisesList"
import EditExercise from "./components/EditExercises"
import CreateUser from "./components/CreateUser"


function App() {
  return (
    <Router>
      <br/>
      <nav>
      <Route Path="/" exact component={ExerciseList} />
      <Route Path="/edit/id"component={EditExercise} />
      <Route Path="/create" component={CreateExercise} />
      <Route Path="/user" component={CreateUser} />
      </nav>
    </Router>
  );
}

export default App;
