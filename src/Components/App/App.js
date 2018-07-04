import React, { Component } from 'react';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import './App.css';
import { findPeople } from '../helper/api-caller.js';
import { cleanPeople } from '../helper/cleaner.js';


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
    this.getPeople = this.getPeople.bind(this)
  }

// componentDidMount() {
//   fetch("https://swapi.co/api/")
//     .then(response => response.json())
//     .then

// }

async getPeople() {
  this.setState({cards: [...await findPeople()]})
}


getPlanets() {

}

getStarships() {

}



  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Header 
        getPeople={this.getPeople}
        getPlanets={this.getPlanets}
        getStarships={this.getStarships}
        />
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
