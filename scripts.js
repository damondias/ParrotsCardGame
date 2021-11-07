let tipoDeCartas = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", 
                    "assets/fiestaparrot.gif","assets/metalparrot.gif",
                    "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];

function inicio(){
    let qtdDeCartas = parseInt(prompt("Com quantas cartas quer jogar? "));    

    let regra = qtdDeCartas%2 !== 0 || qtdDeCartas < 4 || qtdDeCartas > 14; // Regra do jogo pelo requisito    
    while(regra){
        qtdDeCartas = parseInt(prompt("Número inválido \nCom quantas cartas quer jogar?  "));        
        regra = qtdDeCartas%2 != 0 || qtdDeCartas < 4 || qtdDeCartas > 14;        
    }
    sortearCartas(qtdDeCartas);   
}

function sortearCartas(qtdDeCartas){
    let qtdTipos = qtdDeCartas/2;    
    let tipoDeCartas_sorteio = tipoDeCartas.sort(comparador);   
    
    let cartas =[];
    for(let i=0; i<qtdTipos;i++){
        for(j=0; j<2;j++){          
           cartas.push(`${tipoDeCartas_sorteio[i]}`);
        }
    }    
       
    let cartas_sorteadas = cartas.sort(comparador);    
    
    let cartas_jogo= document.querySelector("main");
    for(i=0;i<cartas_sorteadas.length;i++){
        cartas_jogo.innerHTML += `<div class="carta" data-identifier="card" onclick="virarCarta(this);">
                                    <div class="face frente" data-identifier="front-face">
                                        <img src= ${cartas_sorteadas[i]} alt="parrot${i}">  
                                    </div>
                                    <div class="face verso"  data-identifier="back-face">
                                        <img src="assets/front.png" alt="parrot">
                                    </div>
                                  </div>`   
    }
    jogo();
}
function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(cartaVirar){    
    cartaVirar.classList.add("virar");   
      
}
function jogo(){
    return
}

inicio();