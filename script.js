// - Pedir numero 
// - Sumar otro numero al pedido anteriormente
// - pedir texto
// - concatenar un valor en cada repeticion, 
// - una salida por cada resultado hasta que se ingresa "ESC"
// - pedir un nro 
// - repetir la salida del mensaje "HOLA" la cantidad de veces ingresada



function sumarNumero() {
let numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada iteraccion"));
let suma = 0;
    for (let i=0; i < 10; i++){
        let numero2 = parseInt(prompt("Ingrese el numero que sera sumado en cada iteraccion"));
        suma = numero1 + numero2;
        console.log("Suma: " +suma)
        console.log("Nro de iteracion: "+i)
    }
}

sumarNumero()

function concatenarTexto() {
let texto = prompt("Ingrese un texto")
let result = texto
let txtConcat

    while (txtConcat != 'ESC'){
        txtConcat = prompt("Ingrese un texto para concatenar al inicial")
        result = result + " " + txtConcat
        console.log(result)
    }
}

concatenarTexto()

function repetirMensaje() {
let numero1 = parseInt(prompt("Ingrese un numero para repetir el mensaje"))

    for(let i = 1; i <= numero1; i++){
        alert("Hola")
    }
}

repetirMensaje() 