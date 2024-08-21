gsap.registerPlugin(ScrollTrigger)

console.log(gsap)



let img1 = document.querySelector('.i1');

let img2 = document.querySelector('.i2');

let img3 = document.querySelector('.i3');

let img4 = document.querySelector('.i4');

let img5 = document.querySelector('.i5');

let img6 = document.querySelector('.i6');

let img16 = document.querySelector('.i16');

//S-empresas  -   S-residencial  -  S-energia  -  S-nucli
const imgcontrol = [img3, img4, img5, img2]



// EMPRESAS
gsap.to({},{
    scrollTrigger:{
        start: "top center",
        end: "bottom center",
        
        
        onEnter: function(){
            document.getElementById("t2").style.opacity = 1;
            document.getElementById("sub2").style.opacity = 1;
            
            img3.classList.toggle('active');

            let c = getElementTopLeft("S-empresas").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
            


        
        },
        onEnterBack: function(){
            document.getElementById("t2").style.opacity = 1;
            document.getElementById("sub2").style.opacity = 1;
            img3.classList.toggle('active');

            let c = getElementTopLeft("S-empresas").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        trigger: '#S-empresas',
        onLeave: function(){
            document.getElementById("t2").style.opacity = 0;
            document.getElementById("sub2").style.opacity = 0;
            img3.classList.toggle('active');
        },
        onLeaveBack:function(){
            document.getElementById("t2").style.opacity = 0;
            document.getElementById("sub2").style.opacity = 0;
            img3.classList.toggle('active');
        }
    },
    duration: 0,
    
    
})





// RESIDENCIAL
gsap.to({},{
    scrollTrigger:{
        start: "top center",
        end: "bottom center",
        
        
        
        onEnter: function(){
            document.getElementById("t3").style.opacity = 1;
            document.getElementById("sub3").style.opacity = 1;
            
            img4.classList.toggle('active');

            let c = getElementTopLeft("S-residencial").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        onEnterBack: function(){
            document.getElementById("t3").style.opacity = 1;
            document.getElementById("sub3").style.opacity = 1;
            img4.classList.toggle('active');

            let c = getElementTopLeft("S-residencial").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        trigger: '#S-residencial',
        onLeave: function(){
            document.getElementById("t3").style.opacity = 0;
            document.getElementById("sub3").style.opacity = 0;
            img4.classList.toggle('active');
        },  
        onLeaveBack:function(){
            document.getElementById("t3").style.opacity = 0;
            document.getElementById("sub3").style.opacity = 0;
            img4.classList.toggle('active');
        }
    },
    duration: 0,
    
    
})



// ENERGIA
gsap.to({},{
    scrollTrigger:{
        start: "top center",
        end: "bottom center",
        
        
       
        
        onEnter: function(){
            document.getElementById("t4").style.opacity = 1;
            document.getElementById("sub4").style.opacity = 1;
            
            img5.classList.toggle('active');

            let c = getElementTopLeft("S-energia").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        onEnterBack: function(){
            document.getElementById("t4").style.opacity = 1;
            document.getElementById("sub4").style.opacity = 1;
            img5.classList.toggle('active');

            let c = getElementTopLeft("S-energia").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        trigger: '#S-energia',
        onLeave: function(){
            document.getElementById("t4").style.opacity = 0;
            document.getElementById("sub4").style.opacity = 0;
            img5.classList.toggle('active');
        },  
        onLeaveBack:function(){
            document.getElementById("t4").style.opacity = 0;
            document.getElementById("sub4").style.opacity = 0;
            img5.classList.toggle('active');
        }
    },
    duration: 0,
    
    
})




// CLIENTES
gsap.to({},{
    scrollTrigger:{
        start: "top center",
        end: "bottom center",
        
        
        
        onEnter: function(){
            document.getElementById("t1").style.opacity = 1;
            document.getElementById("subcli").style.opacity = 1;
            
            img2.classList.toggle('active');

            document.getElementById("logotime").style.opacity = 1;
            document.getElementById("logotime2").style.opacity = 1;

            let c = getElementTopLeft("S-nucli").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        onEnterBack: function(){
            document.getElementById("t1").style.opacity = 1;
            document.getElementById("subcli").style.opacity = 1;
            img2.classList.toggle('active');

            document.getElementById("logotime").style.opacity = 1;
            document.getElementById("logotime2").style.opacity = 1;

            let c = getElementTopLeft("S-nucli").top
            /* console.log(bot + "valor ") */
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = c + 500 - 210 +"px"
        
        },
        trigger: '#S-nucli',
        onLeave: function(){
            document.getElementById("t1").style.opacity = 0;
            document.getElementById("subcli").style.opacity = 0;
            img2.classList.toggle('active');

            document.getElementById("logotime").style.opacity = 0;
            document.getElementById("logotime2").style.opacity = 0;
        },  
        onLeaveBack:function(){
            document.getElementById("t1").style.opacity = 0;
            document.getElementById("subcli").style.opacity = 0;
            img2.classList.toggle('active');

            document.getElementById("logotime").style.opacity = 0;
            document.getElementById("logotime2").style.opacity = 0;
        }
    },
    duration: 0,
    
    
})




//final
gsap.to({},{
    scrollTrigger:{
        start: "center bottom ",
        end: "bottom center",
        
        
        
        onEnter: function(){
            let circlepx = getElementTopLeft("lastcircle").top

            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = (circlepx - 345) + 'px'; 
        
        },
        onEnterBack: function(){
            document.getElementById("megaline").style.transition = '1.4s';
            document.getElementById("megaline").style.height = (circlepx - 345) + 'px'; 
        
        },
        trigger: '#lastsec',
        onLeave: function(){
            //nada
        },  
        onLeaveBack:function(){
            //nada
        }
    },
    duration: 0,
    
    
})


//circle




/* getElementTopLeft("lastcircle").top */