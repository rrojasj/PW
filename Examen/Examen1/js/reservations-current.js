/********** Función: Arreglo de reservas **********/

window.addEventListener('load', () => {
    try {
        populateReservationsTable();
    } catch {
        console.error("Valores incorrectos!");
    }
});

var reservationsDataJSON = localStorage.getItem('reservationsDataLS');

var reservationsDataJS = JSON.parse(reservationsDataJSON);
var tableBody = document.getElementById('rs-table-body');

console.log(reservationsDataJS);

function populateReservationsTable () {
    tableBody.innerHTML = '';
    for (var i = 0; i < reservationsDataJS.length; i++){
        var reservationsObj = reservationsDataJS[i];
        var newTableRow = document.createElement('tr');

        let rowNumberCell = document.createElement('td');
        rowNumberCell.textContent = i + 1;
        newTableRow.appendChild(rowNumberCell);
    
        for (var dataInput in reservationsObj){
            var newTableData = document.createElement('td');
            newTableData.textContent = reservationsObj[dataInput];
            newTableRow.appendChild(newTableData);
        }
        tableBody.appendChild(newTableRow);
    }
}

var exitBtn = document.getElementById('exit-btn');
exitBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Redireccionando...',
        html: 
            `<div class="loading-spinner">
                <div class="spinner"></div>
                <span>Cargando...</span>
            </div>`,
        icon: 'info',
        timer: 3000,
        showConfirmButton: false
        }).then(() => {
            window.location.href = "buy.html";
    });
});