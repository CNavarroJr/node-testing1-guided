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
    expect(prius).toHaveProperty('make')
    expect(prius).toHaveProperty('make', 'toyota')
  })
  it("cars have a model property", () => {
    expect(prius.model).toBe("prius");
  })
  it('cars have make and model', () => {
    // expect(prius).toEqual(
    //   { make: 'toyota', model: 'prius' }
    // )
    expect(prius).toMatchObject(
      { make: 'toyota', model: 'prius' }
    )
  })
  it('new cars have odometer 0', () => {
    expect(prius.odometer).toBe(0)
  })
  it('has a drive method', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBeTruthy()
    expect(prius.drive).toBeInstanceOf(Function)
  })
  it('drive returns the driven distance', () => {
    expect(prius.drive(5)).toReturn(5);
  })
})
