let angle = 0;
let myTexture;
let caxixiCase3d_bottom;
let caxixiCase3d_top;
var easycam;

function preload() {
  
  //myTexture = loadImage('image.jpg');
  // caxixiCase3d = loadModel('caxixiCase3d.obj');
  caxixiCase3d_bottom = loadModel('stl_caxixiCase3d.stl');
  caxixiCase3d_top = loadModel('stl_caxixiCase3d_top.stl');
  
}

function setup() {

  pixelDensity(1);
  var canvas = createCanvas(windowWidth*0.8, windowHeight*0.8, WEBGL);
  canvas.parent('p5Container');
  setAttributes('antialias', true);
  
  console.log(Dw);
  console.log(Dw.EasyCam.INFO);

  easycam = createEasyCam();
}

function draw() {
  //rotateX(-0.5);
  //rotateY(-0.5);
  rotateZ(PI);
  //translate(0,0,-500);


	scale(3);//resize
  
  background(0);
	// strokeWeight(1);

	// fill(255, 64, 0);
	// box(15);
  
	// push();
	// translate(0, 0, 20);
	// fill(0, 64, 255);
	// box(5);
	// pop();
  
  // push();
	// translate(0, 0, -20);
	// fill(64, 255, 0);
	// box(5);
  // pop();
  background(0);  
  ambientLight(175, 52, 0);  
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.div(100);
  directionalLight(255, 255 , 255, v);  
  
  fill(255);
  noStroke();

  push();  
    
    //rotateY(angle);

    //rotateZ(PI);  
    //rotateY(angle * 1.3);
    //rotateZ(angle * 0.7);
    //box(100);
    translate(50, 0, 0);
    //texture(kitten);
    //rotateY(angle);
    model(caxixiCase3d_bottom);      
  // pop();

  // push();
    //rotateZ(PI);
    translate(0,50,0);
    rotateZ(PI);
    // rotateY(angle);
    model(caxixiCase3d_top);
    
  pop();

  angle += 0.009;

}

function windowResized() {
  resizeCanvas(windowWidth*0.8, windowHeight*0.8);
  easycam.setViewport([0,0,windowWidth*0.8, windowHeight*0.8]);
}


// let sketch = function(p) {
//   let angle = 0;
// let myTexture;
// let caxixiCase3d_bottom;
// let caxixiCase3d_top;
// var easycam;

//   p.preload = function (){
//     caxixiCase3d_bottom = loadModel('stl_caxixiCase3d.stl');
//   caxixiCase3d_top = loadModel('stl_caxixiCase3d_top.stl');
//   }
//   p.setup = function() {    

//     pixelDensity(1);
//     var canvas = p.createCanvas(windowWidth*0.8, windowHeight*0.8, WEBGL);
    
//     setAttributes('antialias', true);
    
//     console.log(Dw);
//     console.log(Dw.EasyCam.INFO);
  
//     easycam = createEasyCam();
//   };

//   p.draw = function() {

//   };

//   p.keyTyped = function(){
//     if (p.key === 'a') {
//       p.background(0);
//     }
//   };

//   p.windowResized = function (){
//     p.resizeCanvas(windowWidth*0.8, windowHeight*0.8);
//     easycam.setViewport([0,0,windowWidth*0.8, windowHeight*0.8]);
//   }
// };


// mySketch = new p5(sketch, 'p5Container');
