//criando a passagem entre os botões ativos ao passar o mouse
const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for(let i=0; i <botoes.length;i++){
    botoes [i].onclick =function(){
        botoes[i].classList.add("ativo");
    }
    console.log()
}