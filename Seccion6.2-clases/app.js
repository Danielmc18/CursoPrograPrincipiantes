
class Galleta {

    constructor(botones, sabor){


        this.botones = botones;
        this.sabor = sabor;
        this.fechaCreacion = 'HOY'

    }


};



class Carro {

    constructor(marca,tipo,puertas){

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderCarro(){

        if(this.encendido){

            console.log('El carro esta encendido ');
        }else{
            this.encendido = true;
            console.log('Carro encendido');
        }
        return this;
    }

    realizarViaje(consumo){

        
        if(!this.encendido) return console.log('carro apagado')

        if(consumo > this.gasolina) return console.log('No puede');
        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina;

        // if(this.encendido){

        //     if(consumo > this.gasolina){
        //         console.log('Te falta gasolina');
        //     }else{

        //         this.gasolina = this.gasolina - consumo;

        //         return 'le queda' + this.gasolina;
        //     }
           
        // }else{
        //     console.log('El carro esta apagado');
        // }  
    }

}

let carro = new Carro('Mazda','Sedan',2);


