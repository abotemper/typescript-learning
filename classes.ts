// public可以在任意地方使用
// private 仅仅只可以在这个类中使用， 用实例调用都不行，但是可以在类里建另一个2方法，在类中调用第一个方法
// 实例可以调用2方法
//protected 也是一种private， 但是不同于private的地方在于， protected 可以在子类继承中调用


class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
   private drive(): void {
    console.log('boom');//重写了
  }
  startDrivingProcess() : void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
// car.drive(); drive in car is a private method so we cant use it like that
car.startDrivingProcess();// but we can use like that
// car.honk();