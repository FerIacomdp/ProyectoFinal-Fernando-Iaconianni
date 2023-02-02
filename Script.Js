console.log("hola js");

/*--------------------- HTML HISTORIA ------------------------------------------*/
 
let video=document.querySelector(".video1");

function hacerCorrer(){
    let escuchaPlay=document.querySelector(".botonPlay");
    video.play();
    console.log(video.duration);
}

function pausar(){
    let escuchaPausa=document.querySelector(".botonPausa");
    video.pause();    
}

window.addEventListener('load',()=>{
    document.querySelector(".duracionVideo").innerHTML=` Duracion video : ${video.duration}`;
});

/* --------------- HTML JUGUEMOS -------------------- */

/*console.log("hola juguemos");*/

let ima1=document.querySelector(".imagenes111");
let ima2=document.querySelector(".imagenes222");
let ima3=document.querySelector(".imagenes333");

let dest1=document.querySelector("#cajaSoltar1");
let dest2=document.querySelector("#cajaSoltar2");
let dest3=document.querySelector("#cajaSoltar3");

        /* imagen a trasladar (ahora si cambia)*/
 ima1.addEventListener('dragstart',inicTraslado1);
 ima1.addEventListener('dragend',finTraslado1);

 ima2.addEventListener('dragstart',inicTraslado2);
 ima2.addEventListener('dragend',finTraslado2);

 ima3.addEventListener('dragstart',inicTraslado3);
 ima3.addEventListener('dragend',finTraslado3)

        /*en el destino (se agregan destinos y funciones)*/
dest1.addEventListener('drop',soltarElemento1);
dest1.addEventListener('dragover',prevenirDef);

dest2.addEventListener('drop',soltarElemento2);
dest2.addEventListener('dragover',prevenirDef);

dest3.addEventListener('drop',soltarElemento3);
dest3.addEventListener('dragover',prevenirDef);

        /*zona de funciones */
function inicTraslado1(pepe){
     pepe.dataTransfer.setData('Text',"./imagenes/Rompe1.png");
}
function inicTraslado2(pepe){
    pepe.dataTransfer.setData('Text',"./imagenes/Rompe2.png");
}
function inicTraslado3(pepe){
    pepe.dataTransfer.setData('Text',"./imagenes/Rompe3.png");
}

function finTraslado1(pepe){
    ima1.style.display='none';
}
function finTraslado2(pepe){
    ima2.style.display='none';
}
function finTraslado3(pepe){
    ima3.style.display='none';
}

function inicTraslado1(pepe){
    pepe.dataTransfer.setData('Text',"./imagenes/Rompe1.png");
}

function inicTraslado2(pepe){
    pepe.dataTransfer.setData('Text',"./imagenes/Rompe2.png");
}

function inicTraslado3(pepe){
    pepe.dataTransfer.setData('Text',"./imagenes/Rompe3.png");
}

        /**aca tambien modificar una vez agregados  */
function soltarElemento1(parametro){
    let dataImg=parametro.dataTransfer.getData('Text');
    dest1.innerHTML=`<img src="${dataImg}" alt="" id="imagenes" >`
    //dest1.innerHTML=`<img id="imagenes" src="./imagenes/Rompe2.png" alt="imgen 2 de rompecabezas" class="imagenes222">`
}

function soltarElemento2(parametro){
    let dataImg=parametro.dataTransfer.getData('Text');
    dest2.innerHTML=`<img src="${dataImg}" alt="" id="imagenes" >`
    //dest1.innerHTML=`<img id="imagenes" src="./imagenes/Rompe2.png" alt="imgen 2 de rompecabezas" class="imagenes222">`
}

function soltarElemento3(parametro){
    let dataImg=parametro.dataTransfer.getData('Text');
    dest3.innerHTML=`<img src="${dataImg}" alt="" id="imagenes" >`
    //dest3.innerHTML=`<img id="imagenes" src="./imagenes/Rompe2.png" alt="imgen 2 de rompecabezas" class="imagenes222">`
}

function prevenirDef(otroParam){
     otroParam.preventDefault();
}








