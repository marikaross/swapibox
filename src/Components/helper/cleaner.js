const cleanPeople = (data) => {
  const allPeople = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population
    }
  })
  return allPeople
}

const cleanScroll = (data) => {
  const filmInfo = {
    summary: data.opening_crawl,
    title: data.title,
    releaseDate: data.release_date
  }
  return filmInfo
}

const cleanPlanet = (data) => {
  const planetInfo = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population,
      residents: planet.residents
    }
  })
  console.log(planetInfo)
  return planetInfo
}

export { cleanPeople, cleanScroll, cleanPlanet }

  