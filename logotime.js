

var logo = document.getElementById("logotime")
var logo2 = document.getElementById("logotime2")

var html = document.getElementById("htmlname")


let alllogos = ["./imagenes/torre.png","./imagenes/gasco.png","./imagenes/sqm.png"]
let alllogos2 = ["./imagenes/lostilos.png","./imagenes/lipi.png","./imagenes/burger.png"]
let alltext = []


alltext[0] = '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[1] = '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[2] = '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[3] = '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[4]= '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[5]= '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
let loli = 0
let loli2 = 0

function changelogo(){

    if(loli < 2){
        loli +=1
        
        /* console.log(loli) */
    }
    else{
        loli = 0
        /* console.log(loli) */
    }


    if(loli2 < alltext.length - 1){
        loli2 +=1
        
        /* console.log(loli) */
    }
    else{
        loli2 = 0
    }

    
    
    
    setTimeout(function(){

        
        
        changelogo()
        logo.src = alllogos[loli]
        logo2.src = alllogos2[loli]
        html.innerHTML = alltext[loli2]

    }, 4600);


}

changelogo()