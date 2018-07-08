import React from 'react';
import ApiCallers from '../helper/api-caller.js'
import * as cleaner from '../helper/cleaner.js' 
import { rawPersonData, apiCallerPersonData, mockPersonData, findHomeworldPromiseData, findSpeciesPromiseData, finalPeopleObject} from '../helper/mockPersonData.js';
import { apiCallerPlanetData } from '../helper/mockPlanetData.js'



describe('findPeople', () => {
  let apiCaller 

  beforeEach(() => {
    apiCaller = new ApiCallers()
    apiCaller.findHomeworld = jest.fn().mockImplementation(() => Promise.resolve(1))
    apiCaller.findSpecies = jest.fn().mockImplementation(() => Promise.resolve(2))

    cleaner.cleanPeople = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        { json: () => Promise.resolve(rawPersonData) }
        )
    )

  })

  it('should call fetch with the correct parameters', async () => {
    const url = 'https://swapi.co/api/people'
    await apiCaller.findPeople()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });


  it('findHomeworld should be called with the correct parameters', async () => {
    const expectedParams = rawPersonData.results
    await apiCaller.findPeople()
    expect(apiCaller.findHomeworld).toHaveBeenCalledWith(expectedParams)
  });

  it('findSpecies should be called with the data findHomeworld returns', async () => {
    const expectedParams = 1
    await apiCaller.findPeople()
    expect(apiCaller.findSpecies).toHaveBeenCalledWith(expectedParams);
  });
  it('should call cleanPeople with the correct parameters', async () => {
    const expectedParams = 2
   await apiCaller.findPeople()
   expect(cleaner.cleanPeople).toHaveBeenCalledWith(expectedParams);
  });


})

describe('findHomeworld', () => {
  let apiCaller

  beforeEach(() => {
    apiCaller = new ApiCallers()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      {json: () => Promise.resolve(apiCallerPersonData)}))
  })

  it('should call fetch with the correct parameters', async () => {
    const url = 'https://swapi.co/api/planets/1/'
    await apiCaller.findHomeworld(apiCallerPersonData)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it.skip('should return a people object array with homeworld in it', async () => {
    const expected = findHomeworldPromiseData
    const results = await apiCaller.findHomeworld(apiCallerPersonData)
    expect(results).toEqual(expected);

  })
})

describe ('findSpecies', () => {
  let apiCaller

  beforeEach(() => {
    apiCaller = new ApiCallers()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve( {json: () => Promise.resolve(mockPersonData)}))
  })

  it('should call fetch with the proper parameters', async () => {
    const url = 'https://swapi.co/api/species/1/'
    await apiCaller.findSpecies(findSpeciesPromiseData)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it.skip('should return an array of objects with all pertinent data', async() => {
    console.log(mockPersonData)
    const expected = finalPeopleObject
    const results = await apiCaller.findSpecies(findSpeciesPromiseData)
    expect(results).toEqual(expected)
  })
})


describe('findPlanets', () => {
  let apiCaller

  beforeEach(() => {
    apiCaller = new ApiCallers()
    apiCaller.findResidents = jest.fn().mockImplementation(() =>  Promise.resolve(1))
    apiCaller.residentsMap = jest.fn().nockImplementation(() => Promise.resolve({}))
  })


})