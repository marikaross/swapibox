import {mockPersonResults, mockPersonData} from '../helper/mockPersonData.js';
import {mockPlanetData, mockPlanetResults} from '../helper/mockPlanetData.js';
import { mockVehicleOutput, mockVehicleData } from '../helper/mockVehicleData.js';
import {mockScrollData, mockScrollResults} from '../helper/mockScrollData.js';

import { cleanPeople, cleanPlanet, cleanVehicles, cleanScroll } from '../helper/cleaner.js';

describe('cleanPeople', () => {

  it('each person is a data object inside an array containing the name, homeworld, species, and population and its data as key value pairs', () => {
    const person = cleanPeople(mockPersonData);

    expect(typeof person).toBe('object');
    expect(person).toEqual(mockPersonResults);
  });

});

describe('cleanPlanet', () => {
  it('each planet is a data object inside of an array containing the name, terrain, climate, population, residents and its data as key value pairs', () => {

  const planet = cleanPlanet(mockPlanetData);

  expect(planet).toEqual(mockPlanetResults);
  expect(typeof planet).toBe('object');
  });
});

describe('cleanScroll', () => {
  it('each scroll has a data object containing the summary, title, and release date and its data as key value pairs', () => {

    const scroll = cleanScroll(mockScrollData);
    expect(scroll).toEqual(mockScrollResults);
    expect(typeof scroll).toBe('object')
  });
});

describe('cleanVehicles', () => {
  it('each starship is a data object containing the name, model, class, and passengers and its data as key value pairs', () => {
    const starship = cleanVehicles(mockVehicleData);
    expect(starship).toEqual(mockVehicleOutput);
    expect(typeof starship).toBe('object');
  });
});