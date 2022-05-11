// 8- Crear una función que reciba como argumento un arreglo, la función 
// debe de retornar el 
// nombre que tenga más letras del arreglo, y debe de trabajar así:


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

function masLargo(arr){

    let nombreLargo='';

    for(let i =0; i<arr.length; i++){

        let nombre = arr[i];

        if(nombre.length > nombreLargo.length){

            nombreLargo = nombre;
        }
        

    }


    return nombreLargo;


}

let heroeLargo = masLargo( heroes );
console.log( heroeLargo ); // Profesor Charles Xavie