var divNumeros = document.getElementById("divNumeros");
var divLetras = document.getElementById("divLetras");
function b1() {
    var aux = divNumeros.innerText;
    if (aux == '') {
        divNumeros.innerHTML = "1"
    } else {
        if (aux == "1,2,3,4,5,6,7,8,9") {
            alert("ingrese numero consecutivamente");

        } else if (aux == "1,2,3,4,5,6,7,8,9,0") {
            divLetras.innerHTML = "A"
        }
    }
}
function b2() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A"){
        divLetras.innerHTML="A,B";
    }else if (auxL==""&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == 1) {
        divNumeros.innerHTML = "1,2";
    }
    else {
        if (aux == '') {
            alert("ingrese numero consecutivamente");
        }
      
    }
    
}
function b3() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B"){
        divLetras.innerHTML="A,B,C";
    }else if (auxL=="A"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2") {
        divNumeros.innerHTML = "1,2,3";
    }
    else {
        if (aux == '' || aux == "1") {
            alert("ingrese numero consecutivamnete")
        }
    }
}

function b4() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C"){
        divLetras.innerHTML="A,B,C,D";
    }else if (auxL=="A,B"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3") {
        divNumeros.innerHTML = "1,2,3,4";
    }
    else {
        if (aux == '' || aux == "1,2") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b5() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D"){
        divLetras.innerHTML="A,B,C,D,E";
    }else if (auxL=="A,B,C"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4") {
        divNumeros.innerHTML = "1,2,3,4,5";
    }
    else {
        if (aux == '' || aux == "1,2,3") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b6() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D,E"){
        divLetras.innerHTML="A,B,C,D,E,F";
    }else if (auxL=="A,B,C,D"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4,5") {
        divNumeros.innerHTML = "1,2,3,4,5,6";
    }
    else {
        if (aux == '' || aux == "1,2,3,4") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b7() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D,E,F"){
        divLetras.innerHTML="A,B,C,D,E,F,G";
    }else if (auxL=="A,B,C,D,E"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4,5,6") {
        divNumeros.innerHTML = "1,2,3,4,5,6,7";
    }
    else {
        if (aux == '' || aux == "1,2,3,4,5") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b8() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D,E,F,G"){
        divLetras.innerHTML="A,B,C,D,E,F,G,H";
    }else if (auxL=="A,B,C,D,E,F"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4,5,6,7") {
        divNumeros.innerHTML = "1,2,3,4,5,6,7,8";
    }
    else {
        if (aux == '' || aux == "1,2,3,4,5,6") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b9() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D,E,F,G,H"){
        divLetras.innerHTML="A,B,C,D,E,F,G,H,I";
    }else if (auxL=="A,B,C,D,E,F,G"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4,5,6,7,8") {
        divNumeros.innerHTML = "1,2,3,4,5,6,7,8,9";
    }
    else {
        if (aux == '' || aux == "1,2,3,4,5,6,7") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
function b0() {
    var aux = divNumeros.innerText;
    var auxL = divLetras.innerText;
    if(auxL=="A,B,C,D,E,F,G,H,I"){
        divLetras.innerHTML="A,B,C,D,E,F,G,H,I,J";
        alert("Felicitaciones")
    }else if (auxL=="A,B,C,D,E,F,G,H"&&aux=="1,2,3,4,5,6,7,8,9,0"){
        alert("ingrese las letras consecutivamenete");
    }
    if (aux == "1,2,3,4,5,6,7,8,9") {
        divNumeros.innerHTML = "1,2,3,4,5,6,7,8,9,0";
    }
    else {
        if (aux == '' || aux == "1,2,3,4,5,6,7,8") {
            alert("ingrese numero consecutivamnete")
        }
    }
}
// var btnA1 = document.getElementById('A-1');
// btnA1.addEventListener('click', function (event) {
//     var dataSet = this.dataset;
//     console.log(dataSet.number);
//     console.log(dataSet.character);


// }); 