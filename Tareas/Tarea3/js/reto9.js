function obtenerTotalFE() {

    // Checks - Full extras - Interior
    var check1 = document.getElementById("interior-check1").checked ? 700 : 0;
    var check2 = document.getElementById("interior-check2").checked ? 350 : 0;
    var check3 = document.getElementById("interior-check3").checked ? 1250 : 0;
    var check4 = document.getElementById("interior-check4").checked ? 975 : 0;
    
    var totalInterior = check1 + check2 + check3 + check4;
    
    // Checks - Full extras - Exterior
    var check5 = document.getElementById("exterior-check1").checked ? 2300 : 0;
    var check6 = document.getElementById("exterior-check1").checked ? 1650 : 0;
    var check7 = document.getElementById("exterior-check1").checked ? 825 : 0;
    var check8 = document.getElementById("exterior-check1").checked ? 1100 : 0;

    var totalExterior = check5 + check6 + check7 + check8;
    
    // Obtener el radio chequeado para verificar el color del carro
    radioSeleccionado = document.querySelector('input[name="inlineRadioOptions"]:checked');

    if(radioSeleccionado){
        var colorSeleccionado = radioSeleccionado.value;
        totalFE = totalInterior + totalExterior;

        Swal.fire({
            title: 'Detalles del Auto',
            html: `
                <p class="text-capitalize">Color: <strong>${colorSeleccionado}</strong></p>
                <p>Total Full Extras: <strong>${totalFE}</strong></p>
            `,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'No ha seleccionado un color de carro. Trate nuevamente.'
        })
    }
}