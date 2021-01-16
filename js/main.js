function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //quando clica no botão injeta essa string no HTML
    //console.log(document.getElementById("agradecimento")); //pega todo um elemento do HTML pelo id
    //alert("Obrigado por clicar!"); //aparece esse texto em um alerta quando clica no botão
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=Nj6pdCzFK_U&ab_channel=SimplyNailogical"); //abre a página em outra aba ao clicar no botão
    //window.location.href = "https://www.youtube.com/watch?v=Nj6pdCzFK_U&ab_channel=SimplyNailogical"; // abre a página na mesma aba ao clicar no botão
}

/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //quando passa o mouse troca o texto
    //alert("trocar texto"); //quando passa o mouse em cima aparece esse texto
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
*/

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"; //no lugar de usar document.getElementById usa this no HTML e passa elemento como parâmetro
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"; //no lugar de usar document.getElementById usa this no HTML e passa elemento como parâmetro
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
//var nome = "Izabella Nascimento";
//var idade = 28;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop("maça");
//console.log(lista);
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.toString()[0]) //imprime o primeiro elemento da string
//console.log(lista.join(" - "))

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var idade = prompt("Qual sua idade? ")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

/*
var count = 0;
while (count < 5){
    alert(count);
    console.log(count);
    count++;
}
*/

/*
var count;
for(count = 0; count <= 5; count ++){
    alert(count);
}
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/

//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
validaIdade(idade);
console.log(validar);
console.log(validaIdade(idade));
*/