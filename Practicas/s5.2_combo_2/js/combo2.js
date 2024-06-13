"use strict"

// Carga de la función determinarMontoFinal usando la biblioteca de eventos JS
document.querySelector('#btnCalcular').addEventListener('click', determinarMontoFinal);

// Carga de la función y declaro variable en cero
function determinarMontoFinal(){
    let sTipoGamer = '';
    let nCostoDia = 0;
    let nPorcAdicional = 0;
    let nCodigo = 0;
    let nCargoAdicional = 0;
    let nMontoFinal = 0;
    let nCantDias = 0;
    let nSubtotal = 0;

    /** Conversiones usando el método querySelector */
    nCodigo = Number(document.querySelector('#txtCodigo').value);
    sTipoGamer = document.querySelector('#slttipogamer').value;
    nCantDias = Number(document.querySelector('#txtCantDias').value);

    /** Condicional usando operador lógico Y */
    if (nCodigo >= 20 && nCodigo <= 24){
        // Equivale a un 10% si cumple la condicional
        nPorcAdicional = 0.1;
    }
    // Ciclo de JS que se usa para elegir opciones del equipo gamer
    switch (sTipoGamer){
        case 'g1':
            nCostoDia = 200000;
            break;
        case 'g2':
            nCostoDia = 250000;
            break;
        case 'g3':
            nCostoDia = 300000;
            break;
        case 'g4':
            nCostoDia = 350000;
            break;
        case 'g5':
            nCostoDia = 400000;
            break;
        default:
            nCostoDia = 0;
            break;
    }

    /** Cálculos */
    nSubtotal = nCostoDia * nCantDias;
    nCargoAdicional = nSubtotal * nPorcAdicional;
    nMontoFinal = nSubtotal + nPorcAdicional;
    
    // Asignación de valor a la variable del monto final
    document.querySelector('#txtResultadoMontoFinal').value = nMontoFinal;
}

function btnLimpiar(){
    document.getElementById('txtCodigo').value = "";
    document.getElementById('txtCantDias').value = "";
    document.getElementById('slttipogamer').value = "";
    document.getElementById('txtResultadoMontoFinal').value = "";
}