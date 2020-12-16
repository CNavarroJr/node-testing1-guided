const Car = require('./car')

describe('Sanity and intro', () => {
  it('works', () => { // THIS is the test
    // assertions
    expect(2 + 2).toBe(4)
  })
  test('everything working', () => { // THIS is another test
    expect({}).not.toBe({})
    expect({}).toEqual({})
  })
})
describe('Car class', () => {
  it('is defined', () => {
    expect(Car).toBeDefined()
  })
})
