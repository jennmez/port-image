function setup() {
  // put setup code here
  createCanvas(1024, 768);
}

function draw() {
  // put drawing code here
  background(41, 33, 24);

  fill(65, 144, 102);
  beginShape();
  vertex(405, 200);
  vertex(555, 200);
  vertex(200, 768);
  vertex(100, 700);
  endShape();

  //mint rect
  fill(186, 206, 184);
  noStroke();
  rect(0, 0, 700, 200);

  //brown
  fill(160, 148, 120, 220);
  ellipse(350, 0, 400, 400);

  //teal
  fill(80, 146, 116, 220);
  rect(300, 0, 100, 200);

  //teal triangle
  fill(94, 160, 135, 230);
  triangle(500, 284, 800, 768, 200, 768);

  //Tan triangle
  fill(218, 199, 158);
  triangle(500, 384, 660, 668, 340, 668);

  // beginShape();
  // vertex(60, 70);
  // vertex(110, 200);
  // vertex(480, 80);
  // vertex(550, 400);
  // vertex(0, 400);
  // vertex(0, 300);
  // endShape();

  // //brown
  // fill(160, 148, 120);
  // beginShape();
  // vertex(90, 90);
  // vertex(160, 230);
  // vertex(480, 80);
  // vertex(550, 400);
  // vertex(0, 400);
  // endShape();

  // //white
  // fill(186, 206, 184);
  // beginShape();
  // noStroke();
  // vertex(180, 110);
  // vertex(200, 275);
  // vertex(700, 80);
  // vertex(750, 250);
  // vertex(850, 240);
  // vertex(830, 280);
  // vertex(800, 400);
  // vertex(90, 400);
  // endShape();
}
