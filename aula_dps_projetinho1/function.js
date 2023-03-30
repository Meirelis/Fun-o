/*function criarFrase(){
    console.log(" frase1")
    console.log(" frase2")
    console.log(" frase3")
}

criarFrase()

const soma - function(){

}*/

function soma(n1,n2){
    let soma = n1+n2;
    return soma;
}
console.log(`a soma é ${soma(5,5)}`)



function substracao(n1,n2){
    let subtracao = n1-n2;
    return subtracao;
}
console.log(`a subtração é ${substracao(5,5)}`)


function multiplicacao(n1,n2){
    let multiplicacao = n1*n2;
    return multiplicacao;
}
console.log(`a multiplicação é ${multiplicacao(5,5)}`)



function divisao(n1,n2){
    let divisao = n1/n2;
    return divisao;
}
console.log(`a multiplicação é ${divisao(5,5)}`)


function concatenados(nome,sobrenome){
   console.log(`os nomes concatenados são ${nome+sobrenome} `)
}

concatenados('matheus','alax')


function celsius(n1){
    let divisao = n1-32;
    let resultado = divisao/1.8
    return resultado.toFixed(2);
}

console.log(celsius(20))


function imc(peso,altura){
    let divisao = peso/(altura*altura);    
    return divisao.toFixed(2)
}
console.log(imc(80,1.75))


function quadrado(altura,largura){
    let vezes = altura*largura;
    return vezes
}
console.log(quadrado(10,15))


function circulo(raio){
    let area = Math.PI*(raio*raio);
    return area.toFixed(2)
}
console.log(circulo(20))