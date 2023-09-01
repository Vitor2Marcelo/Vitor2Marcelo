function setup() {
    createCanvas(1000, 1000);
    background ("white")
  }
  
  function draw() {
  rect(0,0,100,100)
    fill("black")
    stroke("black")
    if(mouseIsPressed){
      rect(mouseX, mouseY,10,10)}}
  