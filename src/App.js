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
import Offers from "./components/Offers";
import Boxes from "./components/Boxes";
import SimpleSlider from "./components/SimpleSlider";
import SocialMedia from './components/SocialMedia';
import SocialMediaTwo from './components/SocialMediaTwo';




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
 
  <NavBarTwo/>
<Main />
  <InfoSection />
  <Boxes />
<Offers />
  {/* <Card imagePathIn="./relax.jpg" imagePathOut="./relaxtwo.jpg" heading="See our Spas" info="Get your feet wet and hands dirty...The right way, with our bubble baths and mud pedicures. Treat yourself,live.. lavishly"/>
  <Card imagePathIn="./bedroomone.jpg" imagePathOut="./bedroomtwo.jpg" heading="See our Spas" info="Get your feet wet and hands dirty...The right way, with our bubble baths and mud pedicures. Treat yourself,live.. lavishly"/>
  <Card imagePathIn="./bedroomone.jpg" imagePathOut="./bedroomtwo.jpg" heading="See our Spas" info="Get your feet wet and hands dirty...The right way, with our bubble baths and mud pedicures. Treat yourself,live.. lavishly"/> */}
  <Banner value="Enjoy Cross Cultural Cuisine From Every Continent, Here at Escondida We Cater To You." info="World Class Yoga and Pilates Instruction Taught By Jessica Chen, Awarded America's Most Popular pt"/>

  <CreateExercise />

  <SocialMedia  social="SOCIAL HUB" />

  <SocialMediaTwo join = "JOIN THE CONVERSATION"/>

  <SimpleSlider />
  
   </div>
  );
}

export default App;
