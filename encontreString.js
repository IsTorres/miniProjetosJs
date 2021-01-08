// 6 Encontre o String:

// Criar metdo para ler propriedades de um obj
// exibir somente as propriedades do tipo string que estão nesse obj

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    personagem: 'Thor'
};

exibirPropriedade(filme);
function exibirPropriedade(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,":", obj[prop]);
        }
    }
}