import { allCars } from "./cars-data.js";

/** 
 * @description Función que hace que al cargar la página se muestre el auto y su información requerida
 * */
window.addEventListener('load', () => {

    var currentURL = window.location.href;
    
    var urlParams = new URLSearchParams(window.location.search);

    var idAutoValue = urlParams.get('page');

    getImage(idAutoValue);

});

function getImage(idAuto){
    var imgDiv = document.getElementById('img-div');
    var imgSrc;

    for(var i = 0; i < allCars.length; i++) {
        if(allCars[i].idAuto === idAuto){
            imgSrc = allCars[i].imgSrc;
            break;
        }
    }
    
    imgDiv.innerHTML = `
        <img src="imgs/${imgSrc}" style="width=800px; height=600px" alt="${idAuto}">
    `
}