function setup() {
  // put setup code here
  createCanvas(1024, 768);
}

function draw() {
  // put drawing code here
  background(41, 33, 24);

  //brown box
  fill(43, 46, 34);
  rect(400, 200, 300, 150);

  //line 1
  fill(65, 144, 102);
  beginShape();
  vertex(403, 200);
  vertex(553, 200);
  vertex(200, 768);
  vertex(100, 700);
  endShape();

  //line 2
  fill(54, 142, 107);
  beginShape();
  vertex(400, 200);
  vertex(443, 200);
  vertex(100, 700);
  vertex(55, 662);
  endShape();

  //line 3
  fill(54, 150, 117);
  beginShape();
  vertex(350, 200);
  vertex(400, 200);
  vertex(55, 662);
  vertex(25, 640);
  endShape();

  //line 4
  fill(60, 79, 50);
  beginShape();
  vertex(275, 200);
  vertex(350, 200);
  vertex(25, 640);
  vertex(0, 625);
  vertex(0, 570);
  endShape();

  //dark line block
  fill(83, 108, 85, 150);
  beginShape();
  vertex(275, 200);
  vertex(443, 200);
  vertex(175, 590);
  vertex(0, 590);
  vertex(0, 570);
  endShape();

  //overlay block
  fill(83, 108, 85, 150);
  beginShape();
  vertex(275, 200);
  vertex(443, 200);
  vertex(175, 590);
  vertex(0, 590);
  vertex(0, 570);
  endShape();

  //bottom left triangle brown
  fill(60, 79, 50);
  triangle(0, 590, 150, 768, 0, 768);

  //teal triangle
  fill(65, 144, 102);
  triangle(150, 768, 50, 768, 115, 728);

  //mint rect
  fill(186, 206, 184);
  noStroke();
  rect(0, 0, 700, 200);

  //brown circle
  fill(160, 148, 120, 220);
  ellipse(350, 0, 400, 400);

  //teal
  fill(80, 146, 116, 220);
  rect(300, 0, 100, 200);

  //brown box
  fill(47, 75, 55);
  rect(600, 200, 50, 100);

  //teal box
  fill(80, 146, 116);
  rect(650, 200, 50, 100);

  //teal triangle
  fill(94, 160, 135, 230);
  triangle(500, 284, 800, 768, 200, 768);

  //Tan triangle
  fill(218, 199, 158);
  triangle(500, 384, 660, 668, 340, 668);

  //teal circle
  fill(94, 160, 135, 230);
  ellipse(525, 600, 50, 50);

  //brown box layer 6
  fill(43, 46, 34);
  rect(700, 0, 1024, 600);

  //brown box layer 5
  fill(37, 66, 46);
  rect(700, 0, 324, 550);

  //brown box layer 4
  fill(47, 75, 55);
  rect(700, 0, 324, 500);

  //green box layer 3
  fill(54, 150, 117);
  rect(700, 0, 324, 450);

  //green box layer 2
  fill(94, 160, 135, 230);
  rect(700, 0, 324, 400);

  //brown box layer
  fill(108, 102, 80, 100);
  rect(700, 0, 124, 300);

  //mint light box layer 1
  fill(186, 206, 184, 100);
  rect(700, 0, 324, 200);

  //brown box bottom right
  fill(43, 46, 34);
  rect(700, 700, 75, 130);

  //teal triangle layer 3
  fill(37, 66, 46);
  triangle(778, 690, 825, 768, 725, 768);

  //teal triangle layer 2
  fill(47, 75, 55);
  triangle(788, 710, 825, 768, 750, 768);

  //teal triangle layer 1
  fill(54, 150, 117);
  triangle(800, 730, 825, 768, 775, 768);
}
