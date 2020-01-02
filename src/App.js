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
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import NavBarTwo from "./components/NavBarTwo"
import Cards from "./components/Cards"



function App() {
  return (
   <div>
  <NavBar />
  <NavBarTwo/>
  <Main/>
  <Cards />
   </div>
  );
}

export default App;
