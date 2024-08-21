gsap.registerPlugin(ScrollTrigger)

document.getElementById("rd1").checked = true;

console.log(gsap)




gsap.to({},{
    scrollTrigger:{
        start: "center center",
        end: " center center",
        maker: true,
        
        trigger: '#solar',
        
        onEnter: function(){
           document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
           document.getElementById("subtitulo").innerHTML = " "
           document.getElementById("image").style.backgroundImage = "url(./imagenes/casa.jpg)"
           document.getElementById("rd1").checked = true;
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
           document.getElementById("subtitulo").innerHTML = " "
           document.getElementById("image").style.backgroundImage = "url(./imagenes/casa.jpg)"
           document.getElementById("rd1").checked = true;
        },
        
       
        

            
        
    },
    duration: 0,
    
    
})








gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        trigger: '#movil',
        
        onEnter: function(){
            document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
            document.getElementById("subtitulo").innerHTML = "Convierte la energía del sol y utilízala cuando quieras"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
            document.getElementById("rd2").checked = true;
             
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
            document.getElementById("subtitulo").innerHTML = "Convierte la energía del sol y utilízala cuando quieras"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
            document.getElementById("rd2").checked = true;
            
        },
        
        onLeave: function(){
           console.log(" ")
        },
        onLeaveBack:function(){

            console.log(" ")
            
        }
    },
    duration: 0,
    
    
})





