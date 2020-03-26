// Classes
class Car {
  constructor(doors, engine, color, seat) {

      this.doors = doors;
      this.engine = engine;
      this.color = color;
      this.seat = seat;
  }
}

class  Suv extends Car {
  constructor(doors, engine,color,seat,wheels) {
    super(doors, engine,color,seat);
    this.wheels = wheels;

  }
}

class Bike extends Car{
  constructor(engine, color, seat){
    super(0, engine,color,seat);
  }
}

const scooty = new Car(0, 'petrol','white',2);
const cx5 = new Suv(4, 'VB', 'black', 4, 5)
const cx4 = new Suv(4, 'VB', 'black', 4, 4)
const scooty1 = new Bike('petrol','red',2);

// console.log(scooty, scooty1, cx4, cx5);

// Class Factory

class BusFactory {
  createBus(desination) {
    switch (desination) {
      case 'pune':
        return new Car(2,'Diese','red',30);
      case 'mumbai':
        return new Car(1,'Diese','white',40);
      case 'hyd':
        return new Car(10,'Gas','green',10);
      case 'che':
        return new Car(3,'rokel','yellow',50);
    }
  }
}

class SuvFactory {
  createSuv(wheels) {
    switch (wheels) {
      case 4:
        return new Suv(wheels,'V4','red',wheels,wheels);
      case 5:
        return new Suv(wheels,'V5','white',wheels,wheels);
      case 6:
        return new Suv(wheels,'V6','green',wheels,wheels);
      case 7:
        return new Suv(wheels,'V8l','yellow',wheels,wheels);
    }
  }
}

const busDepo = new BusFactory();
const suvFactory = new SuvFactory();

const abstractFunction = (type,prop) => {
  switch (type) {
    case 'bus':
      return busDepo.createBus(prop);
    case 'suv':
      return suvFactory.createSuv(prop);
  }
}

let suv = abstractFunction('suv',5);
let pune = abstractFunction('bus','pune');

console.log(suv, pune);
