let conteAzul;
let conteBlanco;
let conteGris;
let conteHueso;
let conteNegro;
let conteRojo;

function mostrarAzul(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');

    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');

    if(azul.checked){
        conteAzul.style.display = "block";
        conteBlanco.style.display = "none";
        conteGris.style.display = "none";
        conteHueso.style.display = "none";
        conteNegro.style.display = "none";
        conteRojo.style.display = "none";
    }
}

function mostrarBlanca(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');

    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');

    if(blanco.checked){
        conteAzul.style.display = "none";
        conteBlanco.style.display = "block";
        conteGris.style.display = "none";
        conteHueso.style.display = "none";
        conteNegro.style.display = "none";
        conteRojo.style.display = "none";
    }
}

function mostrarGris(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');

    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');

    if(gris.checked){
        conteAzul.style.display = "none";
        conteBlanco.style.display = "none";
        conteGris.style.display = "block";
        conteHueso.style.display = "none";
        conteNegro.style.display = "none";
        conteRojo.style.display = "none";
    }
}

function mostrarHueso(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');

    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');

    if(hueso.checked){
        conteGris.style.display = "none";
        conteBlanco.style.display = "none";
        conteAzul.style.display = "none";
        conteHueso.style.display = "block";
        conteNegro.style.display = "none";
        conteRojo.style.display = "none";
    }
}

function mostrarNegra(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');

    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');
    
    if(negro.checked){
        conteGris.style.display = "none";
        conteBlanco.style.display = "none";
        conteAzul.style.display = "none";
        conteHueso.style.display = "none";
        conteNegro.style.display = "block";
        conteRojo.style.display = "none";
    }
}

function mostrarRoja(){
    let azul = document.querySelector('input[name="inlineRadioOptions"][value="azul"]');
    let blanco = document.querySelector('input[name="inlineRadioOptions"][value="blanca"]');
    let gris = document.querySelector('input[name="inlineRadioOptions"][value="gris"]');
    let hueso = document.querySelector('input[name="inlineRadioOptions"][value="hueso"]');
    let negro = document.querySelector('input[name="inlineRadioOptions"][value="negra"]');
    let rojo = document.querySelector('input[name="inlineRadioOptions"][value="roja"]');
    
    let conteAzul = document.getElementById('conteAzul');
    let conteBlanco = document.getElementById('conteBlanco');
    let conteGris = document.getElementById('conteGris');
    let conteHueso = document.getElementById('conteHueso');
    let conteNegro = document.getElementById('conteNegro');
    let conteRojo = document.getElementById('conteRojo');
    
    if(rojo.checked){
        conteGris.style.display = "none";
        conteBlanco.style.display = "none";
        conteAzul.style.display = "none";
        conteHueso.style.display = "none";
        conteNegro.style.display = "none";
        conteRojo.style.display = "block";
    }
}