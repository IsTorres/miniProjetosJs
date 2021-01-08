// 3 FizzBuzz:

// Div por 3 => Fizz
// Div por 5 => Buzz
// Div por 3 e 5 => FizzBuzz
// Não divisivel por 3 e 5 => entrada
// Não é um numero => 'Não é um numero'

let entrada = FizzBuzz('dale');
console.log(entrada);

function FizzBuzz(numero){
    if( typeof numero !== 'number'){
        return 'Não é um numero';

    } if(numero % 3 == 0 && numero % 5 == 0){
        return 'FizzBuzz';

    } if(numero % 3 == 0){
        return 'Fizz';

    } if(numero % 5 == 0){
        return 'Buzz';
    }
    return numero;
};