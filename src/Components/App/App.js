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

componentDidMount() {
  let num = Math.floor(Math.random()*7)+1;
  fetch(`https://swapi.co/api/films/${num}/`)
    .then(response => response.json())
    .then(results => cleanScroll(results))
    .then(results => this.setState({scroll: { results }}))
}

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
        <Sidebar 
        summary={opening_crawl} 
        title={title} 
        release={release-date} 
        />
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
