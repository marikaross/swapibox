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

}

export { cleanPeople, cleanScroll, cleanPlanet }

  