const botoes = document.querySelectorAll(".botao");
console. log(botoes);

for(let i=0; i< botoes.length; i++){
    botoes[i].onclick=function(){
        
    for(let i=0; i<botoes.length; i++){
        botoes[i].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");

    }
    
}