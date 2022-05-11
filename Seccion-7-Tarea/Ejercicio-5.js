let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];


let par = 0;
let impar = 0;


for (let i = 0; i < numeros.length; i++) {
    
    if(numeros[i]%2===0){
        console.log(`EL numero ${numeros[i]} es par`);
        par+=1;
    }else{
        console.log(`El numero ${numeros[i]} es impar`);
        impar+=1;
    }

}

console.log(`En el arreglo habia ${par} pares y ${impar} impares`);