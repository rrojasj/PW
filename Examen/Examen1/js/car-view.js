import { allCars, upcomingCars } from "./cars-data.js";
/** 
 * @description Función que hace que al cargar la página se muestre el auto y su información requerida
 * */
window.addEventListener('load', () => {
    
    var urlParams = new URLSearchParams(window.location.search);
    var idAutoValue = urlParams.get('page');
    
    getImage(idAutoValue);
    getInformation(idAutoValue);
    showUpcomingCars();

    window.showUpcomingReservationForm = showUpcomingReservationForm;
    
    window.changeMainImg = changeMainImg;

});

export function getImage(idAuto){
    console.log("getImage called with idAuto:", idAuto);
    var imgDiv = document.getElementById('img-div');

    if (!imgDiv) {
        console.error("Error: imgDiv element with id 'img-div' not found.");
        return; // Exit the function if imgDiv is null
    }

    var imgSrc;

    for(var i = 0; i < allCars.length; i++) {
        if(allCars[i].idAuto === idAuto){
            imgSrc = allCars[i].imgSrc;
            break;
        }
    }
    
    imgDiv.innerHTML = `
        <div class="pt-5 d-flex justify-content-center col-lg-12">
            <img id="cv-main-img" class="car-view-main-img" src="imgs/${imgSrc}" alt="${idAuto}">
        </div>
        <div class="pt-5"></div>
        <div class="car-view-strip d-flex justify-content-center col-lg-12 pb-3">
            <img id="thumb-1" class="active" src="imgs/${imgSrc}" alt="${idAuto}" onclick="changeMainImg(this.id, this.src)">
            <img id="thumb-2" src="imgs/pw_e1_car_view_inside_1.webp" alt="Car inside 5" onclick="changeMainImg(this.id, this.src)">
            <img id="thumb-3" src="imgs/pw_e1_car_view_inside_2.webp" alt="Car inside 2" onclick="changeMainImg(this.id, this.src)">
            <img id="thumb-4" src="imgs/pw_e1_car_view_inside_3.webp" alt="Car inside 3" onclick="changeMainImg(this.id, this.src)">
            <img id="thumb-5" src="imgs/pw_e1_car_view_inside_4.webp" alt="Car inside 4" onclick="changeMainImg(this.id, this.src)">
            <img id="thumb-6" src="imgs/pw_e1_car_view_inside_5.webp" alt="Car inside 5" onclick="changeMainImg(this.id, this.src)">
        </div>
    `
}

export function getInformation(idAuto){

    /********* Variables de elementos en el HTML *********/
    var brandContainer = document.getElementById('car-brand');
    var modelContainer = document.getElementById('car-model');
    var priceContainer = document.getElementById('car-price');
    var yearContainer = document.getElementById('car-year');
    var milesContainer = document.getElementById('car-miles');
    var colorContainer = document.getElementById('car-color');
    var typeContainer = document.getElementById('car-type');
    var traccionContainer = document.getElementById('car-drivetrain');
    var transmisionContainer = document.getElementById('car-transmision');

    var quoteBtn = document.getElementById('quote-btn');
    var reserveNewUsedBtn = document.getElementById('reserve-used-new-car-btn');
    var reserveUpcomingBtn = document.getElementById('reserve-upcoming-car-btn');
    
    /********* Variables globales *********/
    var marca = document.getElementById('car-brand');
    var modelo = document.getElementById('car-model');
    var annio = document.getElementById('car-year');
    var precio = document.getElementById('car-price');
    var millas = document.getElementById('car-miles');
    var color = document.getElementById('car-color');
    var tipo = document.getElementById('car-type');
    var traccion = document.getElementById('car-drivetrain');
    var transmision = document.getElementById('car-transmision');
    
    for(var i = 0; i < allCars.length; i++) {
        if(allCars[i].idAuto === idAuto){
            marca = allCars[i].marca;
            modelo = allCars[i].modelo;
            annio = allCars[i].annio;
            precio = allCars[i].precio;
            millas = allCars[i].millas;
            color = allCars[i].color;
            tipo = allCars[i].tipo;
            traccion= allCars[i].traccion;
            transmision= allCars[i].transmision;
            quoteBtn.id = allCars[i].idAuto;
            reserveNewUsedBtn.id = allCars[i].idAuto;
            
            quoteBtn.id = `${allCars[i].idAuto}`;
            reserveNewUsedBtn.id = `${allCars[i].idAuto}`;

            // Add the click event listener to the Quote button
            quoteBtn.addEventListener('click', () => {
                goToCarQuotation(allCars[i].idAuto);
            });
            // Add the click event listener to the Reserve new or used car button
            reserveNewUsedBtn.addEventListener('click', () => {
                goToCarReservation(allCars[i].idAuto);
            });
            
            break;
        }
    }

    // Price format in US Dollars
    var usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var formattedPrice = usDollar.format(precio);

    // Mileage format with comma
    var formattedMileage = (millas.toLocaleString());

    brandContainer.textContent = marca;
    modelContainer.textContent = modelo;
    priceContainer.textContent = formattedPrice;
    yearContainer.textContent = annio;
    milesContainer.textContent = formattedMileage;

    // Lista
    typeContainer.textContent = tipo;
    colorContainer.textContent = color;
    traccionContainer.textContent = traccion;
    transmisionContainer.textContent = transmision;
}

document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const content = item.nextElementSibling;

      parent.classList.toggle('active');

      // Cerrar otros elementos del acordeón
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== parent) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
});

export function changeMainImg(idImg, srcImg){
    var mainImg = document.getElementById('cv-main-img');

    mainImg.src = srcImg;
}

export function showUpcomingCars(){
    var parentRow = document.getElementById("parent-row-container");

    for(var i = 0; i < upcomingCars.length; i++){

        var colDiv = document.createElement("div");
        colDiv.className = "col-sm-12 col-md-6 col-lg-4";

        var idAuto = upcomingCars[i].idAuto;
        var marca = upcomingCars[i].marca;
        var modelo = upcomingCars[i].modelo;
        var annio = upcomingCars[i].annio;
        var imgSrc = upcomingCars[i].imgSrc;
        var millas = upcomingCars[i].millas;
        var precio = upcomingCars[i].precio;
        var color = upcomingCars[i].color;
        var tipo = upcomingCars[i].tipo;
        var traccion = upcomingCars[i].traccion;
        var transmision = upcomingCars[i].transmision;

        // Price format in US Dollars
        var usDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        var formattedPrice = usDollar.format(precio);
        console.log(upcomingCars[2].precio); //23844

        // Mileage format with comma
        var formattedMileage = (millas.toLocaleString());

        colDiv.innerHTML = `
            <div class="card" style="width: 20rem;">
                <img src="imgs/${imgSrc}" class="card-img-top" alt="Próximo ingreso #${i}">
                <div class="card-body">
                    <h4 class="card-title text-uppercase font-stretch-condensed">${marca}</h4>
                    <h5 class="card-title text-uppercase font-stretch-condensed">${modelo}</h5>
                    <h4 class="card-title text-uppercase font-stretch-condensed fw-bolder">${formattedPrice}</h4>
                    <div class="pt-3"></div>
                    <div class="row">
                        <p class="col-6 fw-light text-center">${annio}</p>
                        <p class="col-6 fw-light text-center">${formattedMileage} mi</p>
                    </div>
                    <div class="row">
                        <p class="col-6 fw-light text-center">${color}</p>
                        <p class="col-6 fw-light text-center">${tipo}</p>
                    </div>
                    <div class="row">
                        <p class="col-6 fw-light text-center">${traccion}</p>
                        <p class="col-6 fw-light text-center">${transmision}</p>
                    </div>
                    <button id="${idAuto}" type="button" class="car-forms-btn car-actions-upcoming-btn btn btn-outline-secondary" onclick="showUpcomingReservationForm(this.id)"><i class="fa-solid fa-money-check-dollar"></i> Reservar</button>
                </div>
            </div>
        `
        parentRow.appendChild(colDiv);
    }
}

// Function to handle the redirection to Quotation
function goToCarQuotation(idAuto) {
    window.location.href = `quotation.html?page=${idAuto}`;
}

// Function to handle the redirection to Reservation
function goToCarReservation(idAuto) {
    window.location.href = `reservation.html?page=${idAuto}`;
}

// Function to handle the redirection to Reservation
export function showUpcomingReservationForm(idAuto) {
    window.location.href = `reservation.html?page=${idAuto}`;
}