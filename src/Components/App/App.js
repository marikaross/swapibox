import React, { Component } from 'react';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './App.css';
import ApiCallers from '../helper/api-caller.js';
import { cleanScroll } from '../helper/cleaner.js';
let apiCaller = new ApiCallers;


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards:[],
      scroll: {},
      favorites: []
    };
  }


  componentDidMount() {
    let num = Math.floor(Math.random()*7)+1;
    fetch(`https://swapi.co/api/films/${num}/`)
      .then(response => response.json())
      .then(results => cleanScroll(results))
      .then(results => this.setState({scroll: { ...results }}));
  }

  getPeople = async () => {
    this.setState({cards: await apiCaller.findPeople()});
  }


  getPlanets = async () => {
    this.setState({cards: [...await apiCaller.findPlanets()]});
  }

  getStarships = async ()  => {
    this.setState({cards: [...await apiCaller.findVehicles()]});
  }




  render() {
    return (
      <div className="App">
        <Header 
          getPeople={this.getPeople}
          getPlanets={this.getPlanets}
          getStarships={this.getStarships}
        />
        <div className="body">
          <Sidebar 
            summary={this.state.scroll} 
          />
          <CardContainer 
            cards={this.state.cards}/>
        </div>
      </div>
    );
  }
}

export default App;
