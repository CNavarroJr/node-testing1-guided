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
  let prius
  beforeEach(() => {
    // anything you want happening before each test
    prius = new Car('toyota', 'prius')
  })
  it('is defined', () => {
    expect(Car).toBeDefined()
  })
  it('can be used to make instances of Cars', () => {
    expect(prius).toBeInstanceOf(Car)
  })
  it('cars have a make property', () => {
    expect(prius.make).toBe('toyota')
    expect(prius).toHaveProperty('make', 'toyota')
  })
  it("cars have a model property", () => {
    expect(prius.model).toBe("prius");
  })
  it('cars have make and model', () => {
    expect(prius).toEqual(
      { make: 'toyota', model: 'prius' }
    )
  })
})
