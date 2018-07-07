import React, { Component } from 'react';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './App.css';
import { findPeople, findPlanets, findVehicles } from '../helper/api-caller.js';
import { cleanPeople, cleanScroll } from '../helper/cleaner.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards:[],
      scroll: {},
      favorites: []
      // buttons: [people: {active: false},
      //           planets: {active: false},
      //           starships:{active: false}]
    };
    this.getPeople = this.getPeople.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
  }

  componentDidMount() {
    let num = Math.floor(Math.random()*7)+1;
    fetch(`https://swapi.co/api/films/${num}/`)
      .then(response => response.json())
      .then(results => cleanScroll(results))
      .then(results => this.setState({scroll: { ...results }}));
  }

 getPeople = async () => {
    this.setState({cards: await findPeople()});
  }


  async getPlanets() {
    this.setState({cards: [...await findPlanets()]});
  }

   async getStarships() {
    this.setState({cards: [...await findVehichles()]})
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
          summary={this.state.scroll} 
        />
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
