import React, { Component } from 'react';
import './App.css';
import { findPeople } from '../helper/api-caller.js';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

// componentDidMount() {
//   fetch("https://swapi.co/api/")
//     .then(response => response.json())
//     .then

// }

getPeople() {

}

getPlanet() {

}

getStarships() {

}



  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Header 
        />
        <CardContainer />
      </div>
    );
  }
}

export default App;
