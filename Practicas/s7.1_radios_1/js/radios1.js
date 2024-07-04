// Checked es una propiedad que significa opción seleccionada
function mostrar(){
    if (document.getElementById('radio1').checked){
        cliente1();
        
    }
    if (document.getElementById('radio2').checked){
        cliente2();
    }
    if (document.getElementById('radio3').checked){
        cliente3();
    }
    if (document.getElementById('radio4').checked){
        cliente4();
    }
    if (document.getElementById('radio5').checked){
        cliente5();
    }
    if (document.getElementById('radio6').checked){
        cliente6();
    }
    if (document.getElementById('radio7').checked){
        cliente7();
    }
}

function limpiar(){
    // Desmarcar los radios
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById('radio5').checked = false;
    document.getElementById('radio6').checked = false;
    document.getElementById('radio7').checked = false;
}