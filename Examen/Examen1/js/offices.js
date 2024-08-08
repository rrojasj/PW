/** 
 * @description Función que crea un Canvas y combina 2 fotos para darle un efecto diagonal
 **/
window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    const img1 = new Image();
    const img2 = new Image();
  
    img1.src = '../imgs/pw_e1_agency_location_banner_1.webp';
    img2.src = '../imgs/pw_e1_agency_location_banner_2.webp';
  
    img1.onload = () => {
      img2.onload = () => {
        const width = canvas.width;
        const height = canvas.height;
  
        // Draw the first image
        ctx.drawImage(img1, 0, 0, width, height);
  
        // Save the context state
        ctx.save();
  
        // Create a diagonal clipping path for the second image
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.clip();
  
        // Draw the second image
        ctx.drawImage(img2, 0, 0, width, height);
  
        // Restore the context state
        ctx.restore();
      }
    }
};

/** 
 * @name searchStores
 * @description Se encarga de validar y verificar que la información de suscripción esté correcta y envía el correo y las alertas correspondientes.
 **/

function searchStores() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Arreglos con las ubicaciones de las sucursales
    var sanJoseOffices = ["Lindora", "La Sabana", "Puriscal"];
    var guanacasteOffices = ["Nicoya", "Liberia"];
    var alajuelaOffices = ["Grecia", "La Fortuna"];

    var officesImgs = {
        'lindora': '../imgs/pw_e1_agency_location_lindora.webp',
        'la sabana': '../imgs/pw_e1_agency_location_sabana.webp',
        'puriscal': '../imgs/pw_e1_agency_location_puriscal.webp',
        'nicoya': '../imgs/pw_e1_agency_location_nicoya.webp',
        'liberia': '../imgs/pw_e1_agency_location_liberia.webp',
        'grecia': '../imgs/pw_e1_agency_location_grecia.webp',
        'la fortuna': '../imgs/pw_e1_agency_location_fortuna.webp',
    }

    var filteredOffices = [];

    // let allOffices = [...sanJoseOffices, ...guanacasteOffices, ...alajuelaOffices];
    let allOffices = sanJoseOffices.concat(guanacasteOffices, alajuelaOffices);

    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }

    for (i=0; i < allOffices.length; i++) {
        if(allOffices[i].toLowerCase().includes(searchInput)) {
            filteredOffices = [allOffices[i]];
            break;
        }
    }

    if (filteredOffices.length === 0) {
        if (searchInput == "san jose") {
            filteredOffices = sanJoseOffices;
        } else if (searchInput == "guanacaste") {
            filteredOffices = guanacasteOffices;
        } else if (searchInput == 'alajuela') {
            filteredOffices = alajuelaOffices;
        }
    }
    displayResults(officesImgs, filteredOffices);
}

/** 
 * @name displayResults
 * @description Se encarga de desplegar la información de las sucursales encontradas
 * @params officesImgs officesFound
 **/
function displayResults (officeImgs, officesFound) {
    var resultsContainer = document.getElementById('officesResults');

    resultsContainer.innerHTML = "";
    
    if (officesFound.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron sucursales de <span class='fw-bold' style='color: #0F4557;'>AutoSpot</span> en esa ubicación</p>";
    } else {
        for (i = 0; i < officesFound.length; i++) {
            var officeImgSrc = officeImgs[officesFound[i].toLowerCase()] || "ruta_por_defecto.jpg";
            var card = document.createElement('div');
            card.className = "card mb-3";
            card.style.maxWidth = "100%";

            card.innerHTML = `
                <div class="row g-0" style="box-shadow: 0 0 5px rgba(15, 69, 87, 0.5), 5px 0 5px rgba(15, 69, 87, 0.5), 0 5px 5px rgba(15, 69, 87, 0.5), -5px 0 5px rgba(15, 69, 87, 0.5);">
                    <div class="col-md-4">
                        <img src="${officeImgSrc}" class="img-fluid rounded-start" alt="Tienda ${officesFound[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Agencia ${officesFound[i]}</h5>
                            <p>En AutoSpot, nuestras sucursales reflejan nuestro compromiso con la excelencia y la satisfacción del cliente. Cada ubicación está diseñada para proporcionar un entorno acogedor y profesional donde puedas explorar nuestra amplia gama de vehículos y recibir servicios de mantenimiento de alta calidad. Nuestro personal capacitado está siempre disponible para ayudarte a encontrar el automóvil perfecto y asegurarse de que tu experiencia con nosotros sea excepcional. Ven a visitar cualquiera de nuestras sucursales y descubre por qué AutoSpot es sinónimo de confianza y calidad en el mundo automotriz.</p>
                            <p class="card-text"><small class="text-body-secondary">Última actualización 6 de Agosto 2024</small></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <h5 class="card-title fw-light">Mapa sede ${officesFound[i]}</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1277.9279483448565!2d-84.05324399411033!3d9.90885607269196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1722997609429!5m2!1ses-419!2scr" width="1260" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            `;

            resultsContainer.appendChild(card);
        }
    }
}