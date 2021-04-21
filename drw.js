const c=document.querySelector("canvas")
const ctx=c.getContext("2d");
let width=2;
let color="#000000"
let line=true;
let offSetV=0;


//welcome
function welcome(val){
ctx.font="24px Time";
var color=ctx.createLinearGradient(0,0,179,179);
color.addColorStop(0,"blue");
color.addColorStop(1,"red");
ctx.fillStyle=color;
ctx.fillText("Web Drawing App (canvas)",5,c.height/2+val)
}
welcome(0)
setTimeout(()=>{
let i=0;
let interVal=setInterval(()=>{
line=false;
welcome(i);
if(i>80){
clearInterval(interVal)
ctx.clearRect(0,0,c.width,c.height);
ctx.font="10px Time";
ctx.fillText("move your finger here to draw something",5,c.height/2)
line=true;
}
i+=1;
},100)
},3000);

//end welcoming
function draw(x,y){
 line ? ctx.beginPath():"";
 // ctx.moveTo(x/3,y/3)
  ctx.lineTo(Math.floor(x),Math.floor(y))
  ctx.strokeStyle=color
  ctx.lineCap="round"
 ctx.lineJoin="round"
  ctx.lineWidth=width;
  ctx.stroke()
}
function clearAll(){
const ask=confirm ("are you sure you want to clear this board \n this action will clear all your drawing");
ask ? ctx.clearRect(0,0,c.width,c.height):"";
}

function useLine(e){
if(line){
line=false
document.querySelector("#lineHTML").innerHTML="use dots";
}
else{
line=true;
document.querySelector("#lineHTML").innerHTML="use line";
}
}


const inputs=document.querySelectorAll("input");
inputs[0].addEventListener("keyup",(e)=>{
let val=inputs[0].value < 0.1 ? 0.1: inputs[0].value;
width=val;
document.querySelector("#widthV").innerHTML=val;
})

inputs[1].addEventListener("keyup",(e)=>{
offSetV=inputs[1].value;
document.querySelector("#offSetV").innerHTML=offSetV;
})

inputs[2].addEventListener("change",(e)=>{
color=inputs[2].value;
document.querySelector("#colorV").innerHTML=inputs[2].value;
})

addEventListener("touchstart",(e)=>{
  draw(e.touches[0].clientX,e.touches[0].clientY+offSetV);
})
addEventListener("touchmove",(e)=>{
draw(e.touches[0].clientX,e.touches[0].clientY+offSetV);
})
addEventListener("touchend",()=>{
ctx.beginPath();
});