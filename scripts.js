let tipoDeCartas = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", 
                    "assets/fiestaparrot.gif","assets/metalparrot.gif",
                    "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];

let qtdDeCartas =0;
function inicio(){
    qtdDeCartas = parseInt(prompt("Com quantas cartas quer jogar? "));    

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
        for(let j=0; j<2;j++){          
           cartas.push(`${tipoDeCartas_sorteio[i]}`);
        }
    }    
       
    let cartas_sorteadas = cartas.sort(comparador);    
    
    let cartas_jogo= document.querySelector("main");
    for(let i=0;i<cartas_sorteadas.length;i++){
        cartas_jogo.innerHTML += `<div class="carta" data-identifier="card" onclick="virarCarta(this);">
                                    <div class="face frente" data-identifier="front-face">
                                        <img src= ${cartas_sorteadas[i]} alt="parrotdojogo">  
                                    </div>
                                    <div class="face verso"  data-identifier="back-face">
                                        <img src="assets/front.png" alt="parrot">
                                    </div>
                                  </div>`   
    }    
}
function comparador() { 
	return Math.random() - 0.5; 
}

let qtdCartasSelecionadas =0;
function virarCarta(cartaVirar){
    const cartaVirada = cartaVirar.classList.contains("virar");    
    if(cartaVirada === false){
        qtdCartasSelecionadas++;
        cartaVirar.classList.add("virar");
    }
    
    const bloqueados = document.querySelectorAll(".carta");
    for(let i=0; i<bloqueados.length;i++){
        bloqueados[i].classList.add("bloqueado");
    }

    setTimeout(() => {
        cartasSelecionadas(cartaVirar);
        for(let i=0; i<bloqueados.length;i++){
            bloqueados[i].classList.remove("bloqueado");
        }

    },1000); 
      
}

let primeiraCarta, segundaCarta, primeiraCartaSelecionada, segundacartaSelecionada;

function cartasSelecionadas(carta){
    if (qtdCartasSelecionadas === 1){
        primeiraCarta = carta.innerHTML;
        primeiraCartaSelecionada = carta;
    }else if (qtdCartasSelecionadas === 2){
        segundaCarta = carta.innerHTML;
        segundaCartaSelecionada =carta;
        jogo();
    }

}

let qtdjogadas =0;
function jogo(){
    qtdjogadas++;
    console.log(qtdjogadas);

    if(primeiraCarta != segundaCarta){
        primeiraCartaSelecionada.classList.remove("virar");
        segundaCartaSelecionada.classList.remove("virar");
    }else{
        primeiraCartaSelecionada.removeAttribute("onclick");
        segundaCartaSelecionada.removeAttribute("onclick");
        qtdDeCartas -=2;
    }

    qtdCartasSelecionadas = 0;
    primeiraCarta = undefined;
    segundaCarta = undefined;
    

}

inicio();