// - Pedir numero 
// - Sumar otro numero al pedido anteriormente
// - pedir texto
// - concatenar un valor en cada repeticion, 
// - una salida por cada resultado hasta que se ingresa "ESC"
// - pedir un nro 
// - repetir la salida del mensaje "HOLA" la cantidad de veces ingresada



function sumarNumero() {
    let numero1 = parseInt(prompt("Ingrese un número"));
    let numero2 = parseInt(prompt("Ingrese el número que sera sumado en cada iteraccion"));
    let suma = 0;
        for (let i=0; i < 10; i++){
            suma = numero1 + numero2;
            console.log("Suma: " +suma)
            console.log("Nro de iteracion: "+i)
            alert("Suma: " +suma)
            alert("ALERT SUMAR NUMERO")
        }
    }
    
    sumarNumero()
    
    function concatenarTexto() {
    let texto = prompt("Ingrese un texto")
    let result = texto
    let txtConcat = prompt("Ingrese un texto para concatenar al texto anterior. Puede dejar de concatenar escribiendo ESC")
    
        while (txtConcat != 'ESC'){
            result = result + " " + txtConcat
            console.log(result)
            alert(result)
            alert("ALERT SUMAR RESULTADO")
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