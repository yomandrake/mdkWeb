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


mySketch = new p5(sketch, 'container');
