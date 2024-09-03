const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
          enunciado:"Qual a data da independêndencia do Brasil?",
          alternativas: ["alternativa1", "alternativa2", "alternativa3"]
   },
   {
           enunciado:"Quando que surgiu a independência do Brasil?",
          alternativas: ["alternativa1", "alternativa2", "alternativa3"]
   },
   {
           enunciado:"Por quê é comemorado a independência do Brasil?",
           alternativas: ["alternativa1", "alternativa2", "alternativa3"]
   },
   {
           enunciado:"Qual a importância da independência do Brasil?",
           alternativas: ["alternativa1", "alternativa2", "alternativa3"]
  },


];


let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual = perguntas[atual];
caixaPergunta.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
