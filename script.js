var btnCod = document.getElementById("btn-cripto");
var btnDec = document.getElementById("btn-descripto");
var btnCop = document.getElementById("btn-copy");
var area = document.getElementById("input-texto");
var msg = document.getElementById("msg");

function codificar(){
    texto = area.value; 
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    msg.value = codificado;
}

function decodificar(){
    texto = area.value; 
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    area.value = decodificado;
}

function copiar() {
    msg.select();
    navigator.clipboard.writeText(msg.value);
    alert("Mensagem copiada.");
}

btnCod.onclick = codificar;
btnDec.onclick = decodificar;
btnCop.onclick = copiar;