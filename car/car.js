class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this.odometer = 0
  }
  drive(distance) {
    this.odometer += distance
    return distance
  }
  driveAsync(distance) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.odometer += distance
        resolve(distance)
      }, 1000)
    })
  }
}


module.exports = Car
