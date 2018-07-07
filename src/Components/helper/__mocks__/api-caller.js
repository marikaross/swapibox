
// const mockScroll = {"this is the worst"}
const mockCards = [{}, {}]


const findPeople = jest.fn().mockImplementation(() => (
  Promise.resolve(mockCards)
))

const findPlanets = jest.fn().mockImplementation(() => (
  Promise.resolve()
))

const findVehicles = jest.fn().mockIplementation(() => (
  Promise.resolve()
))

export {findPeople, findPlanets, findVehicles}
