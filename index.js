const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  get diameter() {
    return this.radius * 2
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * pi)
  }

  get circumference() {
    return pi * this.diameter
  }

  get area() {
    return pi * this.radius**2
  }
}