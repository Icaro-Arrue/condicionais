//1.a. verifica se o número inserido é par
//1.b. números pares
//1.c. números impares

//2.a. informar o preço das frutas
//2.b. O preço da fruta Maçã é R$2.25
//2.c default, 5, pois o break faz com que o case rode

//3.a. tratando o resultado do prompt para q seja um numero (pq peompt sempre retorna string)
//3.b. caso ele insirira 10, a mensagem será 'Esse número passou no teste'. caso seja -10, nada apareceria
//3.c. sim. não é possível acessar a mensagem secreta pq ela está dentro de um escopo local

/*let idadePergunta = Number(prompt("Digite sua idade"))

if(idadePergunta >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
*/

/*
let turno = prompt("Digite o turno em que você estuda: Matutino(M), Vespertino(V) ou Noturno(N)")

if(turno == "M"){
    console.log("Bom Dia!")
} else if (turno == "V") {
        console.log("Boa Tarde!")
     } else if (turno == "N"){
        console.log("Boa Noite!")
     } else {
    console.log("Você não inseriu seu turno escolar")
}
*/
/*
let turno = prompt("Digite o turno em que você estuda: Matutino(M), Vespertino(V) ou Noturno(N)")

switch (turno){
    case "M":
        console.log("Bom Dia!")
        breakl
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Você não inseriu seu turno escolar")
        break
}
*/
/*
let genero = prompt("Qual o gênero do filme que você quer assistir?").toLowerCase()
let precoIngresso = prompt("E qual o valor do ingresso deste filme?")

if(genero == "fantasia" && Number(precoIngresso) <= 15){
    let lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme! Aproveite seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}
*/


let nome = prompt("Nome completo:")
let tipoDeJogo = prompt("Internacional(IN) ou Doméstico(DO)").toUpperCase()
let etapaDoJogo = prompt("SF, DT ou FI").toUpperCase()
let categoria = Number(prompt("Categoria 1, 2, 3 ou 4"))
let quantidadeIngressos = Number(prompt("Quantos ingressos deseja comprar?"))

if(nome){
    console.log(
        `--- Dados da compra ---
        Nome do cliente: ${nome}`
    )
} else if(tipoDeJogo == "IN"){
    console.log(
        `Tipo do jogo: Internacional`
    )
}else if(tipoDeJogo == "DO"){
    console.log(
        `Tipo do jogo: Doméstico`
    )

}else if(etapaDoJogo == SF){
    console.log(
        `Etapa do Jogo: Semi-Final`
    )
}else if(etapaDoJogo == DT){
    console.log(
        `Etapa do Jogo: Decisão do Terceiro Lugar`
    )
}else if(etapaDoJogo == FI){
    console.log(
        `Etapa do Jogo: Final`
    )
}else if (categoria == 1 || 2 || 3 || 4){
    console.log(
        `Categoria: ${categoria}`
    )
}

