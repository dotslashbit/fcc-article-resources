interface Shape {
  name: string;
  color: string;
  area(): number;
}

function calculateArea(shape: Shape): void {
  console.log(`Calculating area of ${shape.name}...`);
  console.log(`Area: ${shape.area()}`);
}

const circle: Shape = {
  name: "Circle",
  color: "Red",
  area() {
    return Math.PI * 2 * 2;
  },
};

function calculatePerimeter(shape: Shape): number {
  // Implementation
}

class Circle implements Shape {
  constructor(public name: string, public color: string, public radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle("My Circle", "Blue", 3);

interface ThreeDShape extends Shape {
  volume(): number;
}

function calculateVolume(shape: ThreeDShape): void {
  console.log(`Calculating volume of ${shape.name}...`);
  console.log(`Volume: ${shape.volume()}`);
}

class Sphere implements ThreeDShape {
  constructor(public name: string, public color: string, public radius: number) {}

  area(): number {
    return 4 * Math.PI * this.radius ** 2;
  }

  volume(): number {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }
}

const mySphere = new Sphere("My Sphere", "Green", 4);
calculateVolume(mySphere);

