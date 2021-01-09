// 8 Asteriscos:

// Função q exibe a quantidade de asteriscos
// correspondente com o numero da linha
exibirAsterisco(5);

function exibirAsterisco(linhas){
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}