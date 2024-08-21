let altura = document.body.clientHeight 

/* console.log(altura) */


let inicio = 250
let primerscrollTop = document.documentElement.scrollTop;

/* if(primerscrollTop > 2500){
    primerscrollTop = 2500
} */
document.getElementById("megaline").style.height = primerscrollTop + inicio + "px"


var numtimer = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            setTimeout(function(){
                const counters = document.querySelectorAll('.counter')


counters.forEach( (counter) => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        /* console.log(typeof target, target) */

        

        const c = +counter.innerText

        const increment = target / 300;

        if(c<target){
            counter.innerText = `${Math.ceil(c + increment )}`
            
            setTimeout(() => {
                updateCounter() 
                

            }, 1);
            
        }
        else{

            counter.innerText = +counter.getAttribute('data-target')

            let prevnum = counter.innerText

            counter.innerText = agregarSeparadorMiles(prevnum)

            if(counter.classList.contains('porcentaje')){
                counter.textContent += "%"
            }
        }
    }
    updateCounter()
})
            }, 1000);
        }
    };
})();









function agregarSeparadorMiles(numero) {
    let partesNumero = numero.toString().split('.');

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return partesNumero.join('.');
}

/* console.log(agregarSeparadorMiles(1000));   
console.log(agregarSeparadorMiles(1000000));  
console.log(agregarSeparadorMiles(1000000.23));  */   


/* --------------- */






var isMobile = {
    Android: function() {
        return navigator.userAgent.sssstch(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* if( isMobile.any()){

    
} */

document.getElementById("MAKING").classList.toggle('active');
function ScrollParallax(){

    /* console.clear(); */
    
    let scrollTop = document.documentElement.scrollTop;
   /*  console.log(scrollTop) */

    if((inicio + scrollTop)> 220){
        document.getElementById("flecha").style.opacity = 0;
        numtimer()
        
    }


    
    if((inicio + scrollTop)> 220){
        document.getElementById("flecha").style.opacity = 0;
    }
    
//cambio de hoy
    /* document.getElementById("megaline").style.height = inicio + scrollTop + "px";  */

    /* console.log( inicio + scrollTop + "px" ) */




    let height = screen.height / 2

    let circlepx = getElementTopLeft("lastcircle").top

   
    let alturdocumento = document.body.scrollHeight

   /*  document.getElementById("megaline").style.height = (getElementTopLeft("lastcircle").top - 180) + 'px' */

   /* console.log( (scrollTop + height + inicio + 500 ) + "px > " + alturdocumento+'px'   ) */

    /* if((scrollTop + height + inicio + 900 )> alturdocumento){

        document.getElementById("megaline").style.transition = '1s';
        document.getElementById("megaline").style.height = (circlepx - 345) + 'px'; 

    }
    else{
        setTimeout(function(){
            document.getElementById("megaline").style.transition = '0.01s';
        }, 2000);

        

    } */







}
    
















window.addEventListener('scroll', ScrollParallax);