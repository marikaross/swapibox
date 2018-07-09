const cleanPeople = (starWarsData) => {
  const allPeople = starWarsData.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population
    };
  });
  return allPeople;
};

const cleanScroll = (starWarsData) => {
  const filmInfo = {
    summary: starWarsData.opening_crawl,
    title: starWarsData.title,
    releaseDate: starWarsData.release_date
  };
  return filmInfo;
};

const cleanPlanet = (starWarsData) => {
  const planetInfo = starWarsData.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population,
      residents: planet.residents
    };
  });
  return planetInfo;
};

const cleanVehicles = (starWarsData) => {
  const vehicleInfo = starWarsData.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      starship_class: vehicle.starship_class,
      passengers: vehicle.passengers
    };
  });
  return vehicleInfo;
};

export { cleanPeople, cleanScroll, cleanPlanet, cleanVehicles };

  