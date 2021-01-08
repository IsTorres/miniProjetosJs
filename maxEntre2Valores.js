// 2 Max entre 2 valores

let valor = max(17, 19);
console.log(valor);

function max(num1, num2){
    if(num1 > num2)
        return num1;
    else return num2;
};

function max(num1, num2){
    return num1 > num2 ? num1 : num2;
};