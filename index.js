// Your code here

class Polygon {
  constructor(array){
    this.sides = array;
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((memo, val) => memo + val)
  }
}

class Triangle extends Polygon {

  get isValid(){
    if(this.sides.length !== 3) return false;
    const [a, b, c] = this.sides;
    if(a + b <= c || a + c <= b || b + c <= a) return false;
    return true;
  }
}

class Square extends Polygon {

  get isValid(){
    if(this.sides.length !== 4) return false;
    const [a, b, c, d] = this.sides;
    if(a === b && a === c && a === d) return true;
    return false;
  }

  get area(){
    return this.sides[0] ** 2
  }
}

