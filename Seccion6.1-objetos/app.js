

let carro = {

    color: 'Blanco',
    traccion: '4x4',
    llantas: '4',
    puertas: '5',
    marca: 'Toyota'

}

//es para hacer referencia a una propiedad de un objeto
// console.log(carro.color);

function describirPersona(p){

    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);



}

let persona = {

    nombre:'Melisa',
    edad: 50,
    estatura: 2.40
}

describirPersona(persona);
