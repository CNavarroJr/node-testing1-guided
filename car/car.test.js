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
  it('can be used to make instances of Cars', () => {
    const prius = new Car('toyota', 'prius') // set up or action
    expect(prius).toBeInstanceOf(Car)
  })
  it('cars have a make property', () => {
    const prius = new Car('toyota', 'prius')
    expect(prius.make).toBe('toyota')
  })
  it("cars have a model property", () => {
    const prius = new Car("toyota", "prius");
    expect(prius.model).toBe("prius");
  })
})
