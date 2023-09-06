let tela = document.getElementById("paulo")
let numeros = '0';
let num2 = '1';
let separ = 0;
let selec = 0;

function zero(){
    if(tela.textContent != 0 || tela.textContent != '0' || ela.textContent != ''){
        numeros+='0';
    }
    tela.textContent = numeros;
}
function um(){
    numeros+='1';
    tela.textContent = numeros;
}
function dois(){
    numeros+='2';
    tela.textContent = numeros;
}
function tres(){
    numeros+='3';
    tela.textContent = numeros;
}
function quatro(){
    numeros+='4';
    tela.textContent = numeros;
}
function cinco(){
    numeros+='5';
    tela.textContent = numeros;
}
function seis(){
    numeros+='6';
    tela.textContent = numeros;
}
function sete(){
    numeros+='7';
    tela.textContent = numeros;
}
function oito(){
    numeros+='8';
    tela.textContent = numeros;
}
function nove(){
    numeros+='9';
    tela.textContent = numeros;
}
function mais(){
    separ = 1;
    selec = 1;
    tela.textContent = numeros;
    tela.textContent += '+';
}
function apag1(){
    numeros = '';
    num2 = '1';
    separ = 0;
    selec = 0;
    tela.textContent = 0;
}
function apag2(){
    numeros = '0';
    num2 = '1';
    selec = 0;
    tela.textContent = numeros;
}
function igual(){
    if(separ==1){
        igualmais();
    }
}
function igualmais(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res = numerov + num2v;
    tela.textContent = res;
    numeros=res;
}