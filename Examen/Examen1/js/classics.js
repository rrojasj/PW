/****************************** Variables Globales ******************************/
var brandSelect = document.getElementById('brandSelect');
var originSelect = document.getElementById('originSelect');

/** 
 * @name 
 * @description Función que hace que al cargar la página los selects tengan valores y propiedades por defecto
 * */
window.addEventListener('load', () => {

    const originSelect = document.getElementById('origin');
    const firstOption = originSelect.options[0];
  
    originSelect.selectedIndex = 0;
    originSelect.value = firstOption.value;

    const brandSelect = document.getElementById('brandSelect');
    brandSelect.toggleAttribute('disabled');

});

/** 
 * @name activateBrand
 * @description Habilita el select necesario que tiene la propiedad disabled.
 * */
function activateBrand() {
  var selectedOption = originSelect.value;
  if (selectedOption === 'europeo' || selectedOption === 'americano') {
      brandSelect.disabled = false;
      showBrandData();
  } else {
      brandSelect.disabled = true;
      brandSelect.selectedIndex = 0;
  }
}

/********** Mostrar los datos correctos en el Select de Marca **********/
/** 
 * @name showBrandData
 * @description Muestra las marcas correspondientes al origen seleccionado.
 * */
function showBrandData() {
    var classicsData = {
      "americano": ["Cadillac", "Chevrolet", "Dodge"],
      "europeo": ["Mercedes Benz", "Volvo", "Fiat"]
    };
  
    var selectedOption = originSelect.value;
  
    brandSelect.innerHTML = '<option selected>Seleccione una marca:</option>';
  
    if (selectedOption === 'americano') {
      classicsData.americano.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        brandSelect.add(optionElement);
        console.log(optionElement.value);
      });
    } else if (selectedOption === 'europeo') {
      classicsData.europeo.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        brandSelect.add(optionElement);
      });
    } else {
      // Disable the brandSelect if no valid origin is selected
      brandSelect.disabled = true;
    }
}

/********** Mostrar la foto relacionada a la marca seleccionada **********/
/** 
 * @name showClassicPicture
 * @description Muestra las marcas correspondientes al origen seleccionado.
 * */


brandSelect.addEventListener('change', function showClassicPicture(){
    if (brandSelect.disabled==false){
        var selectedOrigin = originSelect.value;
        var selectedBrand = brandSelect.value;
        console.log(selectedBrand);

        var brandFormat = selectedBrand.trim().replace(/\s+/g, '').toLowerCase();
        console.log(brandFormat);

        if (selectedOrigin == 'americano'){
            // pw_e1_classics_american_cadillac.webp
            var imgURL = "../imgs/pw_e1_classics_american_"+brandFormat+".webp";
        } else if (selectedOrigin == 'europeo') {
            var imgURL = "../imgs/pw_e1_classics_european_"+brandFormat+".webp";
        }

        var classicImg = document.getElementById("classic-img");

        classicImg.src = imgURL;
    }
});