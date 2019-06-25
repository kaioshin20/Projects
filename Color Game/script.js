let colors=["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)"]
let flag=true;
let ra=Math.floor((Math.random() * 6) + 1);
let blocks=document.getElementsByClassName("colorb")
var randcolor=function(){
    let r=Math.floor((Math.random() * 256) + 1);
    let b=Math.floor((Math.random() * 256) + 1);
    let g=Math.floor((Math.random() * 256) + 1);
    return [r,b,g]
}
let caar=randcolor();
let constcolor="rgb("+caar[0]+", "+caar[1]+", "+caar[2]+")";
let dynamic=document.getElementById('dynamic')
dynamic.innerHTML=constcolor;
for(var i=0;i<blocks.length;i++){
    if (i==ra && flag) {
        blocks[i].style.backgroundColor=constcolor;
        flag=false;
    }
    else{
        blocks[i].style.backgroundColor=colors[i]; 
    }
}