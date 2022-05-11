

// Algoritmo que basado en una nota, imprima el alumno aprueba o no
// se aprueba con 60 o mas 
// si el alumno saca menos de 50 imprimir un mensaje que diga menos de 50

let nota = 40;


/// > mayor
/// < menor
if (nota >= 60) {
    //cuerpo del IF
    console.log(`Usted paso con ${nota}, Felicidades!`);
    
} else {
    //cuerpo del else
    if(nota <=49)
    {
        console.log('por favor estudie más');
    }else{
        
        console.log('Usted no paso :(');
   
    } 
}

