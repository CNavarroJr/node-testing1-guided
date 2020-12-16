const Car = require('./car')
// we can fast timers forward!
// we can mock libraries
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
    expect(prius.drive).toBe(Car.prototype.drive)
  })
  it('drive returns the driven distance', () => {
    expect(prius.drive(5)).toBe(5)
    expect(prius.drive(0)).toBe(0)
    expect(prius.drive(10)).toBe(10)
  })
  it('drive increases the odometer by the driven distance', () => {
    // don't test things that are tested already
    // expect(prius.drive(5)).toBe(5);
    prius.drive(5)
    expect(prius.odometer).toBe(5)
    prius.drive(6)
    expect(prius.odometer).toBe(11)
    prius.drive(9)
    expect(prius.odometer).toBe(20)
  })
  it('driveAsync increases odometer by driven distance', async () => {
    await prius.driveAsync(5)
    expect(prius.odometer).toBe(5)
    await prius.driveAsync(5)
    expect(prius.odometer).toBe(10)
  })
  it('drive resolves to the driven distance', async () => {
    const drivenDistance = await prius.driveAsync(5)
    expect(drivenDistance).toBe(5)
  })
  it('drive resolves to the driven distance', () => {
    prius.driveAsync(5)
      .then(drivenDistance => {
        expect(drivenDistance).toBe(5)
      })
  })
})
