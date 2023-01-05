class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      let Volume = (Math.PI * this.radius ** 2 * this.height).toFixed(4);
      return Volume;
    }
  }
  
  class Sphere {
    constructor(radius) {
      this.radius = radius;
    }
  
    getVolume() {
      let Volume = ((4 / 3) * Math.PI * this.radius ** 3).toFixed(4);
      return Volume;
    }
  }
  
  class Cone {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      let Volume = ((Math.PI * this.radius ** 2 * this.height) / 3).toFixed(4);
      return Volume;
    }
  }
  
  let obj1 = new Cylinder(3, 5);
  let Volume1 = obj1.getVolume();
  console.log(`The volume of the Cylinder is ${Volume1} `);
  
  let obj2 = new Sphere(3);
  let Volume2 = obj2.getVolume();
  console.log(`The volume of the Sphere is ${Volume2} `);
  
  let obj3 = new Cone(3, 5);
  let Volume3 = obj3.getVolume();
  console.log(`The volume of the Cone is ${Volume3} `);
  