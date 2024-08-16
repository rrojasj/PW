import { allCars, newCars, usedCars } from "./cars-data.js";



/********** Sección: Carga de Autos **********/

/** 
 * @description Función que hace que al cargar la página se muestren todos los autos los autos
 * */
window.addEventListener('load', () => {

    window.loadModal = loadModal;
    window.showCarType = showCarType;
    window.goToCarView = goToCarView;

    var allCarsTab = document.getElementById('all-cars-tab');
    allCarsTab.className = 'active';

    showCars(allCars);

});

/********** Sección: Modal **********/

export function loadModal(imgID){
    //obtener el modal
    var modal = document.getElementById("modal-lb");
    
    //obtener la imagen y agregarla dentro del modal - 
    //Usar el texto alternativo "alt" como subtítulo
    
    //imagen
    var imgElement = document.getElementById(imgID);
    var imgSrc = imgElement.getAttribute('src');
    var imgAlt = imgElement.getAttribute('alt');
    //contenido
    var modalImg = document.getElementById("img01");
    //titulo 
    var captionText = document.getElementById("caption");
    
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = imgSrc;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = imgAlt;

    //obtenga el elemento <span> que cierra el modal
    var cerrar = document.getElementsByClassName("close")[0];
    
    //cuando el usuario hace clic en <span> (x), cierre el modal
    cerrar.onclick = function() {
        modal.style.display = "none";
    }
}

/** 
 * @name showCars() {
 * }
 * @description Función que hace que al cargar la página se muestren todos los autos los autos
 * @params allCars
 * */
function showCars(carsArray) {
    var cantCols = 2;
    var carCounter = 0;
    var parentContainer = document.getElementById('parent-sales-container');
    parentContainer.innerHTML = "";

    var rowDiv;

    for (var i = 0; i < carsArray.length; i++) {
        // Crear nuevo rowDiv cada vez que carCounter es divisible por cantCols
        if (carCounter % cantCols === 0) {
            rowDiv = document.createElement("div");
            rowDiv.className = "row pt-5";
        }

        // Car attributes variables
        var idAuto = carsArray[i].idAuto;
        var idImg = carsArray[i].idImg;
        var marca = carsArray[i].marca;
        var modelo = carsArray[i].modelo;
        var annio = carsArray[i].annio;
        var imgSrc = carsArray[i].imgSrc;
        var millas = carsArray[i].millas;
        var precio = carsArray[i].precio;
        var color = carsArray[i].color;
        var traccion = carsArray[i].traccion;
        var transmision = carsArray[i].transmision;

        // Price format in US Dollars
        var usDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        var formattedPrice = usDollar.format(precio);

        // Mileage format with comma
        var formattedMileage = (millas.toLocaleString());

        // Columns variables
        var colDiv = document.createElement("div");
        colDiv.className = "col-sm-6";

        colDiv.innerHTML = `
            <div class="card card-parent">
                <div class="">
                    <div class="row pt-3 px-5">
                        <div class="col-4">
                            <p class="card-sales-brand text-center">${marca}</p>
                        </div>
                        <div class="col-4">
                            <p class="card-sales-model text-start">${modelo}</p>
                        </div>
                        <div class="col-4">
                            <p class="card-sales-year text-end">${annio}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="offer-img-style pt-3">
                                <a href="#">
                                    <img id="${idImg}" src="imgs/${imgSrc}" style="width: 300px; height: 225px;" class="modal-class rounded float-start" alt="${modelo}" onclick=loadModal(${idImg})>
                                    <!-- ID modal -->
                                    <div id="modal-lb" class="modal">
                                        <!-- Botón de cierre del modal -->
                                        <!-- &times es la X que aparece -->
                                        <div class="close">&times;</div>
                                        <!-- contenido del modal -->
                                        <img class="modal-content" id="img01">
                                        <!-- Título del modal -->
                                        <div id="caption"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="pt-3 card-sales-price">
                                <p class="text-start fw-bolder">${formattedPrice}</p>
                            </div>
                            <div class="card-body card-sales-details">
                                <div class="row ">
                                    <div class="col-6 text-start"><p>${formattedMileage} mi</p></div>
                                    <div class="col-6"><p>${color}</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-start"><p>${traccion}</p></div>
                                    <div class="col-6"><p>${transmision}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button id="${idAuto}" class="primary-btn" onclick="goToCarView(${idImg})">Ver más</button>
                </div>
            </div>
        `;
        rowDiv.appendChild(colDiv);

        var results = document.getElementById('total-results');
        results.textContent = "Resultados encontrados: " + (carCounter+1);

        // Agregar rowDiv al contenedor principal después de completar una fila
        if (carCounter % cantCols === cantCols - 1 || i === allCars.length - 1) {
            parentContainer.appendChild(rowDiv);
        }
        carCounter++;
    }
}

/********** Sección: Tabs **********/

/** 
 * @name showCarType() {
 * }
 * @description Función que muestra todos los autos de acuerdo al tipo que se haya seleccionado
 * @params event, car-type
 * */
export function showCarType(carType) {

    var allCarsTab = document.getElementById('all-cars-tab');
    var newCarsTab = document.getElementById('new-cars-tab');
    var usedCarsTab = document.getElementById('used-cars-tab');

    if(carType == 'new-cars'){
        newCarsTab.classList.add('active');
        usedCarsTab.classList.remove('active');
        allCarsTab.classList.remove('active');
        showCars(newCars);
    } else if (carType == 'used-cars') {
        newCarsTab.classList.remove('active');
        usedCarsTab.classList.add('active');
        allCarsTab.classList.remove('active');
        showCars(usedCars);
    } else {
        newCarsTab.classList.remove('active');
        usedCarsTab.classList.remove('active');
        allCarsTab.classList.add('active');
        showCars(allCars);
    }  
}



/********** Sección: Modal **********/
/** 
 * @name goToCarView() {
 * }
 * @description Función que redirecciona a la página de vista del carro y le asigna el id del auto al URL
 * @params id
 * */
export function goToCarView(id){
    var idAuto = "auto-"+id;
    
    location.href = "car-view.html?page=" + idAuto;
}