let colors=["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)"]
let bgcolor=["#85144b", "#001f3f", "#0074D9", "#39CCCC", "#3D9970", "#FFDC00", "#B10DC9"]
let flag=true;
let ra=Math.floor((Math.random() * 6) + 1);
let blocks=document.getElementsByClassName("colorb")
let clickcount=0
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

document.getElementById('title').style.backgroundColor=bgcolor[Math.floor((Math.random() * 7) + 1)]
for(var i=0;i<blocks.length;i++){
    if (i==ra && flag) {
        blocks[i].style.backgroundColor=constcolor;
        flag=false;
    }
    else{
        blocks[i].style.backgroundColor=colors[i]; 
    }
}

let chances=document.getElementById('chances')

for(let k=0;k<blocks.length;k++){
    blocks[k].onclick=function(){
        if(this.style.backgroundColor==constcolor){
            alert('found')
            document.location.reload(true)
        }
        else{
            this.remove()
        }
        clickcount++
        if (clickcount<3) {
            chances.innerHTML=(3-clickcount);
        }
        else {
            chances.innerHTML=0;
            alert('you lose')
            document.location.reload(true)    
        }
    }
}

