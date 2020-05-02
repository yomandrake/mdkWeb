/*

function setup() {
  createCanvas(720, 920);
  background(0);
  frameRate(60);
  }

function draw() {
  blendMode(BLEND);
  //background(0);
  let x = frameCount;
  let r = int(sin( frameCount * 0.01 ) * 45 + 127);
  let g = int(sin( frameCount * 0.02 ) * 127 + 127);
  let b = int(sin( frameCount * 0.03 ) * 127 + 127);
  
  let gridSize = 35;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(255);
      //rect(x - 1, y - 1, 3, 3);
      stroke(r,g,b,50);
      line(x, y, mouseX, mouseY);
    }
  }

}

function keyTyped() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
*/

let sketch = function(p) {


  p.setup = function() {
    p.createCanvas(700, 920);
    p.background(0);
    p.frameRate(60);
  };

  p.draw = function() {
    let x = p.frameCount;
    let r = p.int(p.sin( x * 0.01 ) * 45 + 127);
    let g = p.int(p.sin( x * 0.02 ) * 127 + 127);
    let b = p.int(p.sin( x * 0.03 ) * 127 + 127);
    
    let gridSize = 35;
    for (let x = gridSize; x <= p.width - gridSize; x += gridSize) {
      for (let y = gridSize; y <= p.height - gridSize; y += gridSize) {
        p.noStroke();
        p.fill(255);
        //rect(x - 1, y - 1, 3, 3);
        p.stroke(r,g,b,50);
        p.line(x, y, p.mouseX, p.mouseY);
      }
    };
  };

  p.keyTyped = function(){
    if (p.key === 's') {
      p.saveCanvas('myCanvas', 'png');
    }
  };
};


mySketch = new p5(sketch, 'container');