import React, { Component } from 'react';
import './App.css';

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
