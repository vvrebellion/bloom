//Simple flower drawing code
//Written by Vittoria Ventura, 2020 / vittoriaventura.vv@gmail.com

function setup () {
  createCanvas(displayWidth, displayHeight);
  background(200, 200, 255, 50); //light purple
  frameRate(60);
  noStroke();
}
//For each frame
function draw() {
  if (mouseIsPressed) {   

    //Set mouse position as centre of drawing
    translate(mouseX, mouseY); 

    // rotate canvas using frame count and mouse position
    rotate(radians(frameCount + mouseX));

    //Determine drawing fill randomly
    let r = random (0, 255);
    let g = random (0, 255);
    let b = random (0, 255);
    fill (r, g, b, 50); // Set transparency to 50

    //Determine drawing size randomly
    let size = random(10, 100);

    //loop for 5 petals through rotation of canvas
    for (let i = 0; i < 5; i++) {
      ellipse(0, -40, size, size);
      rotate(radians(72));
    }

    //draw centre circle
    fill(255, 249, 187, 95); // light yellow fill
    ellipse(0, 0, size, size);
  }
}
