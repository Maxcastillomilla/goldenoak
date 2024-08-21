gsap.registerPlugin(ScrollTrigger)
// EMPRESAS
gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        
        onEnter: function(){
            document.getElementById("icon1").style.opacity = 1;
            
            
            
        },
        onEnterBack: function(){
            document.getElementById("icon1").style.opacity = 1;
        
        },
        trigger: '#icon1',
       
        
    },
    duration: 0,
    
    
})


gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        
        onEnter: function(){
            document.getElementById("icon2").style.opacity = 1;
            
            
            
        },
        onEnterBack: function(){
            document.getElementById("icon2").style.opacity = 1;
        
        },
        trigger: '#icon1',
       
        
    },
    duration: 0,
    
    
})

gsap.to({},{
    scrollTrigger:{
        start: "top bottom",
        end: "bottom center",
        
        
        onEnter: function(){
            document.getElementById("icon3").style.opacity = 1;
            
            
            
        },
        onEnterBack: function(){
            document.getElementById("icon3").style.opacity = 1;
        
        },
        trigger: '#icon1',
       
        
    },
    duration: 0,
    
    
})