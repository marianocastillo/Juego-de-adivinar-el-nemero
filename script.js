//seleciona un numero azar 
let numeroAzar = Math.floor(Math.random()*100)+1;

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')

let intentos = 0

//Esta funcion se va a ejecutar cuando se toque el boton 
function chequearResultado(){
    intentos++
    intento.textContent = intentos
    let nuemroIngresado = parseInt(numeroEntrada.value)

    if(nuemroIngresado < 1 || nuemroIngresado > 100 || isNaN(nuemroIngresado)){
        mensaje.textContent = "Por favor, introduce un numero valido entre 1 y 100"
        mensaje.style.color = "black";
        return
    }

    if(nuemroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicidades!, Has adivinado el numero";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;

    }else if (nuemroIngresado < numeroAzar){
                mensaje.textContent = "¡Mas alto!, El numero es mayor al que dijiste";
                mensaje.style.color = "red";
    }else{
        mensaje.textContent = "¡Mas bajo!, El numero es menor al que dijiste";
        mensaje.style.color = "red";
    }
}
