import { cleanPeople } from './cleaner.js';

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
  
 
 export { findPeople }