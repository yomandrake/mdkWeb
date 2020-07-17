let sketch = function(p) {

  

  p.setup = function() {
    p.createCanvas(1000, 500);
    p.background(0);
    p.frameRate(60);
  };

  p.draw = function() {
    let x = p.frameCount;
    let r = p.int(p.sin( x * 0.01 ) * 45 + 127);
    let g = p.int(p.sin( x * 0.02 ) * 127 + 127);
    let b = p.int(p.sin( x * 0.03 ) * 127 + 127);
    
    let  griXdSize = 45;
    let  griYdSize = 20;
    p.translate(50,50);

    for (let x = 0 ; x < griXdSize ; x += 1) {

      for (let y = 0; y < griYdSize; y += 1) {

        p.noStroke();
        p.fill(
          p.int(p.sin( (p.frameCount * 1.5 + (x + y) )  * 0.004 ) * 127 + 127),
          p.int(p.sin( (p.frameCount * 1.5 + (x + y) )  * 0.007 ) * 127 + 127),
          p.int(p.sin( (p.frameCount * 1.5 + (x + y) )  * 0.008 ) * 127 + 127)
        );
        //rect(x - 1, y - 1, 3, 3);
        //p.stroke(0);

        p.square(x*20,y*20,20);
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