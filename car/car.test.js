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
  beforeEach(() => {
    // anything you want happening before each test
    let prius
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
  })
  it("cars have a model property", () => {
    expect(prius.model).toBe("prius");
  })
})
