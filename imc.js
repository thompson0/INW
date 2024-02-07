let peso = prompt("Digite o seu peso ");
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
}
