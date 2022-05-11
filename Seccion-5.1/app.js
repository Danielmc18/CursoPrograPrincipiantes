
function imprimirTabla(numero, limite) {

    for (let index = 1; index <=limite; index++) 
    {
    
        console.log(`${numero} x ${index} = ${index*numero}`);
    
    }

}

//Llamado de la Funcion
///mandar los argumentos en el mismo orden (funcion)
imprimirTabla(3,100);

