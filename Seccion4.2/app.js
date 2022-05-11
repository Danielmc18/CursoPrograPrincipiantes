


let nota = 400;
let notaLetra = '';



if (nota>=90 && nota<=100) {
    notaLetra = 'A';
    console.log(`${nota} es igual a ${notaLetra}`);
}else{

    if (nota>=80 && nota<=89) {
        notaLetra = 'B';
        console.log(`${nota} es igual a ${notaLetra}`);
        
    }else{
        
        if (nota>=70 && nota<=79) {
            notaLetra = 'C';
            console.log(`${nota} es igual a ${notaLetra}`);
            
        }else{

            if (nota>=60 && nota<=69) {
                notaLetra = 'D';
                console.log(`${nota} es igual a ${notaLetra}`);
                    
            }else{

                
                if (nota <= 60) {
                    notaLetra = 'F';
                    console.log(`${nota} es igual a ${notaLetra}`);
                }
            }

        }

    }

}




    
