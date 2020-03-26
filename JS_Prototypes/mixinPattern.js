// Classes
class Car {
  constructor(doors, engine, color, seat) {

      this.doors = doors;
      this.engine = engine;
      this.color = color;
      this.seat = seat;
  }
}

let carMixin = {
  revEngine(){
    console.log(`The ${this.engine} is doing vroom vroom`);
  }
}

Object.assign(Car.prototype, carMixin);

let cx5 = new Car(4,'V8','teal',5);

cx5.revEngine();
