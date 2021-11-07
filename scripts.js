let qtdDeCartas = 0;
function inicio(){
    qtdDeCartas = parseInt(prompt("Com quantas cartas quer jogar? "));
    console.log(qtdDeCartas);

    let regra = qtdDeCartas%2 !== 0 || qtdDeCartas < 4 || qtdDeCartas > 14; // Regra do jogo pelo requisito
    console.log(regra);
    while(regra){
        qtdDeCartas = parseInt(prompt("Número inválido \nCom quantas cartas quer jogar?  ")); 
        console.log(qtdDeCartas);
        regra = qtdDeCartas%2 != 0 || qtdDeCartas < 4 || qtdDeCartas > 14;
        console.log(regra);
    }   
}

inicio();