let max =10, min =1;
let numerosSorteados = [1,2,3,4,5,6,7,8,9];
let numeroSecreto= numeroAleatorio();
let botonIniciar = document.querySelector('#btnIntentar');
let botonReniciar = document.querySelector('#reiniciar');
let valorUsuario = document.getElementById('valorUsuario');
let intentos=0;
let veces = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function numeroAleatorio(){
    let numeroRandom = Math.floor(Math.random()*max)+min;
    if  (numerosSorteados.length == max){
        botonIniciar.disabled =true;
        botonReniciar.disabled = true;
        asignarTextoElemento('p', 'llegaste al numero maximo de juegos, reinicia el juego actualizando');
    }else{
        if(numerosSorteados.includes(numeroRandom)){
            return numeroAleatorio();
         }else{
             numerosSorteados.push(numeroRandom);
             return numeroRandom;
         }
    }
}
function verificarIntento(){
   
    let numeroDeUsuario = parseInt(valorUsuario.value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Felicidades lo hiciste en tan solo ${veces} ${veces>1 ? `veces` : `vez`}`);
        botonReniciar.disabled= false;
        botonIniciar.disabled= true;
    }else{
        
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'el numero es mayor');
            intentos ++;
            veces ++;
            } else if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'el numero es menor');
                intentos ++;
                veces ++;
        }
        if(intentos == 3){
            asignarTextoElemento('p', 'lo lamento tus oportunidades se acabron');
            botonIniciar.disabled= true;
            botonReniciar.disabled= false;
            }else if(intentos == 0 ){
                asignarTextoElemento('p', 'lo lamento el intento es invalido');
                botonIniciar.disabled= true;
                botonReniciar.disabled= false;
            }
        if(numeroDeUsuario == 0 || numeroDeUsuario>10 || numeroDeUsuario<0){
            asignarTextoElemento('p', 'lo lamento el intento es invalido');
                botonIniciar.disabled= true;
                botonReniciar.disabled= false;
        }
    }
    return;
}

//funcion reiniciar juego
function reiniciarApp(){
    intentos=0;
    veces=1;
    botonIniciar.disabled= false;
    botonReniciar.disabled = true;
    valorUsuario.value = "";
    asignarTextoElemento('p', 'ingresar un acces token valido');
    numeroSecreto = numeroAleatorio();
}

asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', 'ingresar un numero del 1 al 10');
