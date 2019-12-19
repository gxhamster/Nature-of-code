// Rain class
// Purple color 138, 43, 226
// background purple 230, 230, 250

class Rain {
  constructor(x, y, vx, vy, color) {
    this.height = 15;
    this.width = 1.5;
    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.color = color
  }

  move() {
    this.position.add(this.velocity);
    if (this.position.x > width || this.position.x < 0)
      this.position.x = 0;
    if (this.position.y > height)
      this.position.y = 0;

  }

  display() {
    stroke(this.color);
    strokeWeight(1);
    fill(this.color);
    rect(this.position.x, this.position.y, this.width, this.height);
  }


};
