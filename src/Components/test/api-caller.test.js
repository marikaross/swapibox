import React from 'react';
import ApiCallers from '../helper/api-caller.js'
import * as cleaner from '../helper/cleaner.js' 
import { rawPersonData } from '../helper/mockPersonData.js' 



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
  it('throws an error if the status is not ok')


})

describe('findPlanets', => {
  let apiCaller

  beforeEach(() => {
    apiCaller = new ApiCallers()
    apiCaller.findResidents = jest.fn().mockImplementation(() =>  Promise.resolve(1))
    
  })
})