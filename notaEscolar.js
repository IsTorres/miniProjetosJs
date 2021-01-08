// 8 Nota Escolar:

// Obter a média a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let array = [90,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);

    //console.log(Math.floor(media));

    if(media < 59) return "F";
    if(media < 69) return "D";
    if(media < 79) return "C";
    if(media < 89) return "B";
    return "A";
}

function calcularMedia(array){
    let soma = 0;
    
    for(let i = 0; i < array.length; i++){
        soma = array[i] + soma++;
        // soma += notas;
    }
    return soma/(array.length);
}