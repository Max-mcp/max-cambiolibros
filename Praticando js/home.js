const nomeEntrada = document.getElementById("entrada-nome");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () => {
    nomeSaida.textContent = nomeEntrada.value;
})
btnTroca.addEventListener('mouseenter', function() {
    nomeSaida.style.color = "#73030D"
})
btnTroca.addEventListener('mouseout', function() {
    nomeSaida.style.color = "#8C8C8C"
})

const btnVerde = document.getElementById("btn_verde");
const btnAmarelo = document.getElementById("btn_amarelo");
const btnAzul = document.getElementById("btn_azul");
const caixa = document.getElementById("caixa");

btnVerde.addEventListener('click', function(){
    caixa.style.backgroundColor = "green"
})
btnAmarelo.addEventListener('click', function(){
    caixa.style.backgroundColor = "yellow"
})
btnAzul.addEventListener('click', function(){
    caixa.style.backgroundColor = "blue"
})
// SIMULADOR ADIÇÃO E SUB DE VALOR
const valorReal = document.getElementById("valor_real");
let contador = 0;
document.getElementById("btn_menos").addEventListener('click',
    () => {
        contador --;
        valorReal.textContent=contador;

    });
document.getElementById("btn_mais").addEventListener('click',
    () => {
        contador ++;
        valorReal.textContent=contador;

    });
//Adicionar Livro
const nomelivro = document.getElementById("nome_livro");
const listaLivros = document.getElementById("lista_livros")

document.getElementById("adicionar_livro").addEventListener('click', () => {

const novolivro = document. createElement("li");
novolivro.textContent = nomelivro. value;
    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "Apagar";

    botaoApagar.addEventListener("click", () => {
        novolivro.remove();
    });

    novolivro.appendChild(botaoApagar);
    listaLivros.appendChild(novolivro);

    nomelivro.value = "";
});