root = document.documentElement;

/* root.style.setProperty('--change', 30 + "px");  */


/* window.addEventListener('resize', () =>
{
    
    
}) */




let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let movil = document.getElementById("fondomovil");
let nav = document.getElementById("nav");
/* mouseover */
/* element.style.webkitAnimationPlayState = "paused";
element.style.webkitAnimationPlayState = "running"; */
/* --star: 0px;
--final: 1px; */

let op = getElementTopLeft("m1").left
let fp = getElementTopLeft("m1").left
root.style.setProperty('--star', fp + "px");
root.style.setProperty('--final', fp + "px");

m1.addEventListener("mouseover", () =>
{
    movil.style.opacity = 1
    op = getElementTopLeft("fondomovil").left
    root.style.setProperty('--star', op + "px");
    movil.style.animation = 'none';
    movil.offsetHeight; /* trigger reflow */
    movil.style.animation = null; 
    var TopLeft = getElementTopLeft("m1");
    /* TopLeft.left */
    root.style.setProperty('--final', TopLeft.left + "px");
    /* console.log(root.style.getPropertyValue('--final')) */
    movil.style.top = TopLeft.top

    movil.style.top = TopLeft.top + "px"
    
    
    
    
}) 
m2.addEventListener("mouseover", () =>
{
    movil.style.opacity = 1
    op = getElementTopLeft("fondomovil").left
    root.style.setProperty('--star', op + "px");
    movil.style.animation = 'none';
    movil.offsetHeight; /* trigger reflow */
    movil.style.animation = null; 
    var TopLeft = getElementTopLeft("m2");
    /* TopLeft.left */
    root.style.setProperty('--final', TopLeft.left + "px");
    /* console.log(root.style.getPropertyValue('--final')) */
    
    movil.style.top = TopLeft.top + "px"
    /* console.log("top es" + TopLeft.top) */
    
}) 
m3.addEventListener("mouseover", () =>
{
    movil.style.opacity = 1
    op = getElementTopLeft("fondomovil").left
    root.style.setProperty('--star', op + "px");
    movil.style.animation = 'none';
    movil.offsetHeight; /* trigger reflow */
    movil.style.animation = null; 
    var TopLeft = getElementTopLeft("m3");
    /* TopLeft.left */
    root.style.setProperty('--final', TopLeft.left + "px");
    /* console.log(root.style.getPropertyValue('--final')) */

    movil.style.top = TopLeft.top + "px"
   
    
}) 
m4.addEventListener("mouseover", () =>
{
    movil.style.opacity = 1
    op = getElementTopLeft("fondomovil").left
    root.style.setProperty('--star', op + "px");
    movil.style.animation = 'none';
    movil.offsetHeight; /* trigger reflow */
    movil.style.animation = null; 
    var TopLeft = getElementTopLeft("m4");
    /* TopLeft.left */
    root.style.setProperty('--final', TopLeft.left + "px");
   /*  console.log(root.style.getPropertyValue('--final')) */

   movil.style.top = TopLeft.top + "px"
   
    
    
}) 


nav.addEventListener("mouseout", () =>{
    movil.style.opacity = 0
})

function getElementTopLeft(id) {

    var ele = document.getElementById(id);
    var top = 0;
    var left = 0;
   
    while(ele.tagName != "BODY") {
        top += ele.offsetTop;
        left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
   
    return { top: top, left: left };
   
}



/* window.addEventListener('scroll', ()=>{
    document.getElementById("nav").style.opacity = 0
    document.getElementById("fondomovil").style.visibility = 0
    setTimeout(function(){
        document.getElementById("nav").style.opacity = 1
    }, 1000);

    
}); */






