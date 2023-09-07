let tela = document.getElementById("paulo")
let numeros = '0';
let num2 = '';
let separ = 0;
var selec = 1;

function zero(){
    if(tela.textContent != 0 || tela.textContent != '0' || tela.textContent != ''){
        numeros+='0';
    }
    tela.textContent += '0';
}
function um(){
    if(selec<=1){
        numeros+='1';
    } else{
        num2+='1';
    }
   tela.textContent = numeros + num2;
}
function dois(){
    if(selec<=1){
        numeros+='2';
    } else{
        num2+='2';
    }
   tela.textContent = numeros + num2;
}
function tres(){
    if(selec<=1){
        numeros+='3';
    } else{
        num2+='3';
    }
   tela.textContent = numeros + num2;
}
function quatro(){
    if(selec<=1){
        numeros+='4';
    } else{
        num2+='4';
    }
   tela.textContent = numeros + num2;
}
function cinco(){
    if(selec<=1){
        numeros+='5';
    } else{
        num2+='5';
    }
   tela.textContent = numeros + num2;
}
function seis(){
    if(selec<=1){
        numeros+='6';
    } else{
        num2+='6';
    }
   tela.textContent = numeros + num2;
}
function sete(){
    if(selec<=1){
        numeros+='7';
    } else{
        num2+='7';
    }
   tela.textContent = numeros + num2;
}
function oito(){
    if(selec<=1){
        numeros+='8';
    } else{
        num2+='8';
    }
   tela.textContent = numeros + num2;
}
function nove(){
    if(selec<=1){
        numeros+='9';
    } else{
        num2+='9';
    }
   tela.textContent = numeros + num2;
}
function mais(){
    separ = 1;
    selec = 2;
    tela.textContent = numeros;
    tela.textContent += '+';
}
function menos(){
    separ = 2;
    selec = 2;
    tela.textContent = numeros;
    tela.textContent += '-';
}
function vezes(){
    separ = 3;
    selec = 2;
    tela.textContent = numeros;
    tela.textContent += 'X';
}
function div1(){
    separ = 4;
    selec = 2;
    tela.textContent = numeros;
    tela.textContent += '/';
}
function div2(){
    separ = 5;
    selec = 2;
    tela.textContent = numeros;
    tela.textContent += '%';
}
function apag1(){
    numeros = '';
    num2 = '';
    separ = 0;
    selec = 0;
    tela.textContent = 0;
}
function apag2(){
    numeros = '';
    num2 = '';
    selec = 0;
    tela.textContent = numeros;
}
function igual(){
    if(separ==1){
        igualmais();
    }else if(separ==2){
        igualmenos();
    }else if(separ==3){
        igualvezes();
    }else if(separ==4){
        igualdivi();
    }else if(separ==5){
        igualdivi2();
    }
}
function igualmais(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res = numerov + num2v;
    tela.textContent = res;
    numeros = res
    num2 = ''
}
function igualmenos(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res2 = numerov - num2v;
    tela.textContent = res2;
    numeros = res2
    num2 = ''
}
function igualvezes(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res2 = numerov * num2v;
    tela.textContent = res2;
    numeros = res2
    num2 = ''
}
function igualdivi(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res2 = numerov / num2v;
    tela.textContent = res2;
    numeros = res2
    num2 = ''
}
function igualdivi2(){
    let numerov = Number(numeros);
    let num2v = Number(num2);
    let res2 = numerov % num2v;
    tela.textContent = res2;
    numeros = res2
    num2 = ''
}