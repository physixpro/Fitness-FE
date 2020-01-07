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
import Card from "./components/Card"
import Banner from "./components/Banner"
import InfoSection from './components/InfoSection';
import bedroomone from "./components/bedroomone.jpg";
import bedroomtwo from "./components/bedroomtwo.jpg";
import test from "./components/test.jpg";
import BannerTwo from "./components/BannerTwo";


//fix you images bro 
// thats weird i dont get why thats happening wierd
// so quickly it doent work because it would parse an object 
//instad of looking for the path 
//so it will look for {someimagepath} rather than imagepath cool ? 
//Got it, thank you so much, i will work on the other cards after the gym, thank you
//an/y/time lol i appreciate it
//

function App() {
  return (
   <div>
  <NavBar />
  <NavBarTwo/>
  <Main/>
  <InfoSection />
  <Card imagePathIn="./relax.jpg" imagePathOut="./relaxtwo.jpg" />
  <Card imagePathIn="./bedroomone.jpg" imagePathOut="./bedroomtwo.jpg"/>
  
  
  
   </div>
  );
}

export default App;
