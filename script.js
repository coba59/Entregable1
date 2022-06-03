// - Pedir numero 
// - Sumar otro numero al pedido anteriormente
// - pedir texto
// - concatenar un valor en cada repeticion, 
// - una salida por cada resultado hasta que se ingresa "ESC"
// - pedir un nro 
// - repetir la salida del mensaje "HOLA" la cantidad de veces ingresada


function sumarNumero() 
    {
        let numero1 = parseInt(prompt("Ingrese un número entre 1 y 9"));
        let numero2 = parseInt(prompt("Ingrese el número que sera sumado en cada iteraccion"));
        let suma = 0;
            for (let i=0; i < 10; i++)
            {
                suma = numero1 + numero2;
                console.log("Nro de iteracion: "+i)
            }
            console.log("Suma: " +suma)
            alert(numero1 + " + " + numero2 + " =  " + suma)          
    }
    
    sumarNumero()
    
 function concatenarTexto() 
    {
        let texto = prompt("Vamos a concatenar dos textos. Ingrese el primer texto que servirá como base")
        let result = texto
        let txtConcat
        
            while (txtConcat != 'ESC')
            {
                let segundoTexto = prompt("Ingrese un texto para concatenar al texto anterior. Puede dejar de concatenar escribiendo ESC")
                txtConcat = segundoTexto
                result = result + " " + segundoTexto
                console.log(result)
                alert("Resultado de la concatenacion: " +result)
            }
    }
    
    concatenarTexto()


    function repetirMensaje() 
    {
        alert("Vamos a repetir la palabra HOLA, la cantidad de veces ingresada.")
        let numero1 = parseInt(prompt("Ingrese la cantidad de veces que quiere repetir la palabra"))
        
            for(let i = 1; i <= numero1; i++)
            {
                alert("HOLA (x" + i + ")")
            }
    }
    
    repetirMensaje()