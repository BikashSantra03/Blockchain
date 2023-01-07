
// Question 2 of assignment 6

class Rectangle {
  constructor(length, weidth) {
    this.length = length;
    this.weidth = weidth;
  }
  area() {
    let Area = this.length * this.weidth;
    return Area;
  }
}

class Square extends Rectangle {
  constructor(length, weidth) {
    super(length, weidth);
  }
}

let obj1 = new Rectangle(2, 5);
let area1 = obj1.area();
console.log(`The area of Rectangle is ${area1}`);

let obj2 = new Square(8, 8);
let area2 = obj2.area();
console.log(`The area of Square is ${area2}`);
