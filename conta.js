let tela = document.getElementById("paulo")
let numeros = [];
let num2 = [];
let t = 0;
let numerov = Number(numeros.value);

function zero(){
    
    if(tela.textContent == 0){
        tela.textContent = `0`
    } else {
        tela.textContent += `0`
        numeros += '0'
    }
}
function um(){
    numeros.push("1")
    
    if(tela.textContent == 0){
        tela.textContent = `1`
    } else {
        tela.textContent += `1`
    }
}
function dois(){
    numeros.push("2")
    if(tela.textContent == 0){
        tela.textContent = `2` 
    } else {
        tela.textContent += `2`
    }
}
function tres(){
    numeros.push('3');
    if(tela.textContent == 0){
        tela.textContent = `3` 
    } else {
        tela.textContent += `3`
    }
}
function quatro(){
    numeros.push('4');
    if(tela.textContent == 0){
        tela.textContent = `4` 
    } else {
        tela.textContent += `4`
    }
}
function cinco(){
    numeros.push('5');
    if(tela.textContent == 0){
        tela.textContent = `5` 
    } else {
        tela.textContent += `5`
    }
}
function seis(){
    numeros.push('6');
    if(tela.textContent == 0){
        tela.textContent = `6` 
    } else {
        tela.textContent += `6`
    }
}
function sete(){
    numeros.push('7');
    if(tela.textContent == 0){
        tela.textContent = `7` 
    } else {
        tela.textContent += `7`
    }
}
function oito(){
    numeros.push('8');
    if(tela.textContent == 0){
        tela.textContent = `8` 
    } else {
        tela.textContent += `8`
    }
}
function nove(){
    numeros.push('9');
    if(tela.textContent == 0){
        tela.textContent = `9` 
    } else {
        tela.textContent += `9`
    }
}
function resultado1(){
    let r = numeros.length
    for(let i=1; i<r; i++){
        numeros[0]+=numeros[i] 
    }
    let v = 1;
    while(v<r){
        v++
        numeros.pop(numeros.length);
    }
    tela.textContent = numerov
}
function apag2(){
    numeros.pop()
    tela.textContent = numeros
}
function apag1(){
    numeros = []
    tela.textContent = 0
}
function mais(){
    resultado1();
    tela.textContent = numeros
    tela.textContent += '+'
    t+=1
}
function igual(){
    igualmais();
}
function igualmais(){
    let numerof = Number(numeros[0].value);
    let num2v = Number(numeros[0].value)
    if(t=1){
        tela.textContent = numerof
    }
    else {
        window.alert("trouxaaa")
    }
}
