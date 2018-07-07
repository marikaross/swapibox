import React from 'react';
import { findPeople, findHomeworld, findSpecies, findPlanets, findResidents, moreMapping, findVehicles } from '../helper/api-caller.js'
import { mockPersonData } from '../helper/mockPersonData.js' 


describe('findPeople', () => {
  let mockFindHomeworld
  let mockFindSpecies


  beforeEach(() => {
    let mockFindHomeworld = jest.fn()
    let mockFindSpecies = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockPersonData)}))
  })

  it('should call fetch with the correct parameters', () => {
    const url = 'https://swapi.co/api/people'
    findPeople()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('after get findPeople gets called, the state should be reset', () => {
    const expectedState = {}
  })

  it.only('findHomeworld should be called with the correct parameters', async () => {
    let mockFindHomeworld = jest.fn()
    const expectedParams = mockPersonData
    await findPeople()
    await expect(mockFindHomeworld).toHaveBeenCalledWith(expectedParams)

  })
})