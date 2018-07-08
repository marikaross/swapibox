import { cleanPeople, cleanPlanet, cleanVehicles } from './cleaner.js';

export default class ApiCallers {
  constructor() {

  }

findPeople = async () => {
  const url = `https://swapi.co/api/people`;
  const response = await fetch(url)
  const results = await response.json()
  const everybody = results.results
  const homeworldPromise = await this.findHomeworld(everybody)
  const speciesPromise = await this.findSpecies(homeworldPromise)
  return cleanPeople(speciesPromise)
  }

 findHomeworld = (people) => {
    const peopleHome = people.map(async person => {
      const response = await fetch(person.homeworld)
      const homeworld = await response.json()
      // console.log(homeworld, '****')
      const wholePerson = {...person, homeworld}
      return wholePerson
    }) 
    return Promise.all(peopleHome)
  }

findSpecies = (people) => {
    const peopleSpecies = people.map(async person => {
      const response = await fetch(person.species)
      const species = await response.json()
      const wholeBeing = {...person, species}
      return wholeBeing
    })
    return Promise.all(peopleSpecies)
  }

findPlanets = async () => {
    const url = `https://swapi.co/api/planets`;
    const response = await fetch(url);
    const results = await response.json();
    const planets = results.results;
    const residentPromise = await this.findResidents(planets)
    const names = await Promise.all(residentPromise)
    const newPlanetInfo = planets.forEach((planet, i) => {
      planet.residents = names[i]
    })
    return cleanPlanet(planets)
  }

findResidents = async (planets) => {
    const getResidents = planets.map(async planet => {
      if(planet.residents.length) {
        return this.residentsMap(planet.residents)
      }
    })
 return await getResidents
}

residentsMap = async (allTheResidents) => {
  const fetchResidents = allTheResidents.map(async resident => {
    const response = await fetch(resident)
    const results =  await response.json()
    const residentNames = await results.name
    return residentNames
  })
    return await Promise.all(fetchResidents)   
 }

 findVehicles = async () => {
  const response = await fetch('https://swapi.co/api/starships/');
  const results = await response.json()
  const vehicles = results.results
  return cleanVehicles(vehicles)
 }
}


  
 
 // export { findPeople, findHomeworld, findSpecies, findPlanets, findResidents, residentsMap, findVehicles }