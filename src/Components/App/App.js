import React, { Component } from 'react';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards:[],
      scroll: {},
      favorites: [],
      // buttons: [people: {active: false},
      //           planets: {active: false},
      //           starships:{active: false}]
    }
  }

  findPeople = () => {

  }

  findPlanets = () => {

  }

  findStarships = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Header 
        findPeople={this.findPeople} 
        findPlanets={this.findPlanets} 
        findStarships={this.findStarships}
        />
        <CardContainer scrollSummary={this.scrollSummary}/>
      </div>
    );
  }
}

export default App;
