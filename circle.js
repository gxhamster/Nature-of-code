class Circle {
  constructor(px, py, vx, vy, ax, ay, size) {
    this.size = size;
    this.position = createVector(px, py);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(ax, ay);
  }

  move() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(2.8);

    if (this.position.x > width || this.position.x < 0)
      this.position.x = 0;
    if (this.position.y > height || this.position.y < 0)
      this.position.y = 0;
  }

  display() {
    stroke(0);
    strokeWeight(3);
    fill(187);
    ellipse(this.position.x, this.position.y, this.size);
  }
};
