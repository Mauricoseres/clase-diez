let numero = parseInt(prompt('Ingresar número'));
        if(numero == 0){
            document.write(`${numero} es un número neutro.`);
        }else if(numero > 0){
            document.write(`${numero} es un número positivo.`);
        }else{
            document.write(`${numero} es un número negativo.`);
        }