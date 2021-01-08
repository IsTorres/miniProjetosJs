// 7 Multiplos de 3 e 5:

// Criar função somar que retorna a soma de todps os multiplos de 3 e 5
// 3 = 3,6,9
// 5 = 5,10

somar(15);

function somar(limite) {
    let soma = [];

    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0){
            soma.push(i);
        }
    }
    //console.log(soma);
    let somatorio = 0;

    for(let p = 0; p < soma.length; p++){
        somatorio = soma[p] + somatorio++;
    }
    console.log(somatorio);
}