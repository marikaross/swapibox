const cleanPeople = (data) => {
  const allPeople = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population
    }
  })
  console.log(cleanPeople)
  return allPeople
}

const cleanScroll = (data) => {
  const filmInfo = {
    summary: data.opening_crawl,
    title: data.itle
    releaseDate: data.release_date,
  }
  return filmInfo
}

export { cleanPeople, cleanScroll }

  