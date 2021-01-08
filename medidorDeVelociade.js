// 4 Medidor de velocidade:


// VelocMax == 70
// a cada 5km acima do limt == +1P na carteira
// Math.Floor() arredondar para baixo
// caso pontos > 12 -> "Carteira Suspendida"

verificarVelocidade(105);

function verificarVelocidade(velocidade){
    const KmPorPonto = 5;
    const limitDePontos = 12
    const limit = 70;
    if(velocidade <= limit){
        console.log('OK');
    }
    else {
        const pontos = Math.floor(((velocidade - limit) / KmPorPonto));
    
        if (pontos >= limitDePontos){
            console.log('Carteira Suspensa');
        } else {
            console.log (pontos)
        }
    }
}