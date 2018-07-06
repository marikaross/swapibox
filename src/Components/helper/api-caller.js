import { cleanPeople, cleanPlanet } from './cleaner.js';

const findPeople = async () => {
  const url = `https://swapi.co/api/people`;
  const response = await fetch(url)
  const results = await response.json()
  const everybody = results.results
  const homeworldPromise = await findHomeworld(everybody)
  const speciesPromise = await findSpecies(homeworldPromise)
  return cleanPeople(speciesPromise)
  }

 const findHomeworld = (people) => {
    const peopleHome = people.map(async person => {
      const response = await fetch(person.homeworld)
      const homeworld = await response.json()
      const wholePerson = {...person, homeworld}
      return wholePerson
    })
  
    return Promise.all(peopleHome)
  }

  const findSpecies = (people) => {
    const peopleSpecies = people.map(async person => {
      const response = await fetch(person.species)
      const species = await response.json()
      const wholeBeing = {...person, species}
      return wholeBeing
    })
    return Promise.all(peopleSpecies)
  }

  const findPlanets = async () => {
    const url = `https://swapi.co/api/planets`;
    const response = await fetch(url);
    const results = await response.json();
    const planets = results.results;
    const residentPromise = await findResidents(planets)
    const names = await Promise.all(residentPromise)
    const newPlanetInfo = planets.forEach((planet, i) => {
      planet.residents = names[i]
    })
    return cleanPlanet(planets)
  }

  const findResidents = async (planets) => {
    const getResidents = planets.map(async planet => {
      if(planet.residents.length) {
        return moreMapping(planet.residents)
      }
    })
 return await getResidents
}

const moreMapping = async (allTheResidents) => {
  const fetchResidents = allTheResidents.map(async resident => {
    // console.log(resident)
    const response = await fetch(resident)
    const results =  await response.json()
    const residentNames = await results.name
    return residentNames
  })
    return await Promise.all(fetchResidents)
    
 }


  
 
 export { findPeople, findPlanets }