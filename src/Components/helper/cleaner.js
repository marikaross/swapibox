const cleanPeople = (data) => {
  const allPeople = data.results.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population
    }
  })
  return allPeople
}

// const cleanScroll


  