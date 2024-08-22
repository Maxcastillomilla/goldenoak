gsap.registerPlugin(ScrollTrigger)
document.getElementById("rd1").checked = true;

console.log(gsap)




gsap.to({},{
    scrollTrigger:{
        start: "bottom center",
        end: " center center",
        maker: true,
        
        trigger: '#solar',
        
        onEnter: function(){
           document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
           document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
           document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
           document.getElementById("rd1").checked = true;
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
           document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
           document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
           document.getElementById("rd1").checked = true;
        },
        
       
        

            
        
    },
    duration: 0,
    
    
})








gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        trigger: '#consultoria',
        
        onEnter: function(){
            document.getElementById("titulo").innerHTML = "CONSULTORÍA"
            document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/consultoria.jpg)"
            document.getElementById("rd2").checked = true;
             
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "CONSULTORÍA"
           document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
           document.getElementById("image").style.backgroundImage = "url(./imagenes/consultoria.jpg)"
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





gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        trigger: '#solarservice',
        
        onEnter: function(){
            document.getElementById("titulo").innerHTML = "Operación y Mantenimiento"
            document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
            document.getElementById("rd3").checked = true;
             
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "Operación y Mantenimiento"
            document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
            document.getElementById("rd3").checked = true;
            
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





gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom top",
        
        trigger: '#electromovilidad',
        
        onEnter: function(){
            document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
            document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
            
            document.getElementById("rd4").checked = true;
             
        },
        onEnterBack: function(){
            document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
            document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
            document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
            
            document.getElementById("rd4").checked = true;
           
            
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



