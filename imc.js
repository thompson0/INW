/*let peso = prompt("Digite o seu peso ");
let altura = prompt("Digite a sua altura ");
parseFloat(peso);
parseFloat(altura);
   
function imc(){
    let resultado = peso/(altura*altura)
    return resultado
}
if(imc()<=18.5){
window.alert("Voce esta abaixo do peso")
}
else if(imc()>=18.6&imc()<=24.9){
    window.alert("Voce esta no peso ideal")
}
else if(imc()>=25&imc()<=29.9){
    window.alert("Levemente acima do peso")
}
else if(imc()>=30&imc()<=34.9){
    window.alert("Obesidade grau 1")
}
else if(imc()>=35&imc()<=39.9){
    window.alert("Obesidade grau 2")
}
else if(imc()>40){
    window.alert("Obesidade grau 3")
}*/
const prompt= require("prompt-sync")()


function getUserInfo(){
  let weight= prompt("Digite o seu peso em KG ")
  let height= prompt("Digite a sua altura em CM ")

  return {
    peso:weight,
    altura:height
  }
}

function calcImc(pesoInformado,alturaInformado){
return pesoInformado/alturaInformado**2
}

function main(){    
    let userData = getUserInfo()
    let peso = userData.peso
    let altura=userData.altura
    let resultadoImc=calcImc(peso,altura)
    if(resultadoImc()<=18.5){
        window.alert("Voce esta abaixo do peso")
        }
        else if(resultadoImc()>=18.6&resultadoImc()<=24.9){
            window.alert("Voce esta no peso ideal")
        }
        else if(resultadoImc()>=25&resultadoImc()<=29.9){
            window.alert("Levemente acima do peso")
        }
        else if(resultadoImc()>=30&resultadoImc()<=34.9){
            window.alert("Obesidade grau 1")
        }
        else if(resultadoImc()>=35&resultadoImc()<=39.9){
            window.alert("Obesidade grau 2")
        }
        else if(resultadoImc()>40){
            window.alert("Obesidade grau 3")
        }
    console.log(`Seu IMC é ${resultadoImc}`)
}
main()

function imprimir(nome){
    console.log(nome)
}
const imprimir = nome=>console.log('ola')
btn1.addEventListener('click',()=>{
    
})