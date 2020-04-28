/*
let isWColor = false;
function setup() {
  createCanvas(720, 920);
  background(0);
  frameRate(60);
  }

function draw() {
  //background(0);
  let x = frameCount;
  let r = int(sin( frameCount * 0.01 ) * 45 + 127);
  let g = int(sin( frameCount * 0.02 ) * 127 + 127);
  let b = int(sin( frameCount * 0.03 ) * 127 + 127);
  
 
  if(this.isWColor){
    fill(r,g,b);
  }else{
    fill(255);
  }
  
  circle(mouseX, mouseY, frameCount % 50 +1 );

}

function keyTyped() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }; 
  if (key === 'a'){
    background(0);
  };
  if (key === 'c'){
    this.isWColor = true;
  };
  
}
*/
let isWColor = false;

let sketch = function(p) {

  

  p.setup = function() {
    p.createCanvas(700, 920);
    p.background(0);
    p.frameRate(60);
  };

  p.draw = function() {

    let isWithColor = isWColor;
    let x = p.frameCount;
    let r = p.int(p.sin( x * 0.01 ) * 45 + 127);
    let g = p.int(p.sin( x * 0.02 ) * 127 + 127);
    let b = p.int(p.sin( x * 0.03 ) * 127 + 127);
    
   
    if(isWColor){
      p.fill(r,g,b);
    }else{
      p.fill(255);
    }; 

    p.circle(p.mouseX, p.mouseY, p.frameCount % 50 + 1 );
  };

  p.keyTyped = function(){
    if (p.key === 's') {
      p.saveCanvas('myCanvas', 'png');
    }

    if (p.key === 'a') {
      p.background(0);
    }

    if (p.key === 'c') {
      isWColor = !isWColor;
    }
  };
};


new p5(sketch, 'container');
