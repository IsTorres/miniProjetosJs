// 5 Par ou Impar:

// Receba uma quantidade de valores p/ avaliar
// função exibe se cada valor é par ou impar

exibirTipo(10);

function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++){
        if( i % 2 === 0 ){
            console.log(i,'PAR');
        }
       else{
            console.log(i,'IMPAR');
        }
    }
};