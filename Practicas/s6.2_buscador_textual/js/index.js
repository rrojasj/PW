'use strict';

//la función searchStores() realiza una búsqueda de tiendas según la entrada del usuario 
//y muestra los resultados utilizando las imágenes asociadas a las tiendas encontradas.

function searchStores() {
    //Obtiene el valor del input de búsqueda del elemento con el id "searchInput" 
    //y lo convierte a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas.
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    //definir arreglos de tiendas para tres ubicaciones diferentes: San José, Santa Ana y Heredia, respectivamente.

    // arreglo de tiendas para Santa José
    let sanJoseStores = ["Curridabat", "San Pedro", "Guadalupe"];

    // arreglo de tiendas para Santa Ana
    let santaAnaStores = ["Pozos", "Lindora", "Salitral"];

    // arreglo de tiendas para Heredia
    let herediaStores = ["San Rafael", "Mercedes", "Santa Barbara"];

    //crea un objeto storeImages que asocia el nombre de cada tienda con su imagen correspondiente.
    let storeImages = {
        "pozos": "sucursalPozos.jpg",
        "lindora": "sucursalLindora.jpg",
        "salitral": "sucursalSalitral.jpg",
        "san rafael": "sucursalSanRafael.jpg",
        "mercedes": "sucursalMercedes.jpg",
        "santa barbara": "sucursalSantaBarbara.jpg",
        "curridabat": "sucursalCurridabat.jpg",
        "san pedro": "sucursalSanPedro.jpg",
        "guadalupe": "sucursalGuadalupe.jpg",
    };

    //crear un arreglo vacío llamado filteredStores que contendrá las tiendas filtradas según la búsqueda del usuario.
    let filteredStores = [];

    //permite combinar todas las tiendas de las tres ubicaciones en un solo arreglo llamado allStores.
    let allStores = [...sanJoseStores, ...santaAnaStores, ...herediaStores];

    //verificar si el campo de búsqueda está vacío, si es así, 
    //muestra una alerta indicando al usuario que debe completar el campo y termina la ejecución de la función.
    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }

    //inicia un ciclo que recorre todas las tiendas combinadas en allStores    
    //permite verificar si el nombre de la tienda actual (en minúsculas) contiene la cadena de búsqueda (también en minúsculas). 
    //si hay una coincidencia, asigna la tienda actual al arreglo filteredStores y termina el ciclo para evitar seguir buscando.
    for (let i = 0; i < allStores.length; i++) {
        if (allStores[i].toLowerCase().includes(searchInput)) {
            // si hay coincidencia, asigna la tienda actual al arreglo filteredStores
            filteredStores = [allStores[i]];
            // termina el bucle, ya que se encontró una coincidencia para que no siga iteractuando y consumiendo memoria
            break;
        }
    }

    //si no se encontró una coincidencia específica, buscar por ubicación general
    //San José, Santa Ana o Heredia) y asigna las tiendas correspondientes a filteredStores.

    if (filteredStores.length === 0) {
        if (searchInput === "san jose") {
            filteredStores = sanJoseStores;
        } else if (searchInput === "santa ana") {
            filteredStores = santaAnaStores;
        } else if (searchInput === "heredia") {
            filteredStores = herediaStores;
        }
    }

    //cargar la función displayResults() pasando como argumentos el arreglo de tiendas filtradas(filteredStores)
    // y el objeto storeImages que contiene las imágenes correspondientes a las tiendas.
    displayResults(filteredStores, storeImages);
}

//la función displayResults() toma las tiendas filtradas y las imágenes asociadas a esas tiendas, 
//y las presenta en forma de tarjetas en el contenedor de resultados en la página web.
//crear tarjetas validando si estan o no estan

function displayResults(stores, storeImages) {
    //obtiene el contenedor de resultadosdel documento HTML con el id "pResult" y lo almacena en la variable resultsContainer.
    let resultsContainer = document.getElementById("pResult");
    //limpia el contenido actual del contenedor estableciendo su propiedad innerHTML como una cadena vacía.
    resultsContainer.innerHTML = "";

    //verificar si el arreglo de tiendas stores está vacío. Si no se encontraron tiendas para la ubicación especificada, 
    //se establece el contenido del contenedor 
    //resultsContainer con un mensaje indicando que no se encontraron tiendas para esa ubicación.
    if (stores.length === 0) {
        resultsContainer.innerHTML = "<p>NO se encontraron tiendas para la ubicación escrita.</p>";
        // sino 
    } else {
        // recorre sobre las tiendas y crea tarjetas para cada una
        //si se encontraron tiendas, la función recorre el arreglo de tiendas stores utilizando un ciclo for 
        //y crea una tarjeta(card) para cada tienda.
        for (let i = 0; i < stores.length; i++) {
            // obtiene la ruta de la imagen correspondiente al local actual
            let imageSrc = storeImages[stores[i].toLowerCase()] || "ruta_por_defecto.jpg";
            // crea una tarjeta (card) para la tienda actual
            let card = document.createElement("div");
            // clase de Bootstrap para tarjetas con margen inferior
            card.className = "card mb-3";
            // establece el ancho maximo de la tarjeta al 100%
            card.style.maxWidth = "100%";
            //crear dinámicamente la estructura de la tarjeta (card) utilizando HTML y la propiedad innerHTML 
            //la tarjeta incluye la imagen de la tienda, el nombre de la tienda, una descripción breve y la fecha de la última actualización.
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Tienda ${stores[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Tienda ${stores[i]}</h5>
                            <p class="card-text">Pollo Granjero y Don Pollo ya son parte del sabor local en Centroamérica, en una estrategia con una amplia visión de expansión y liderazgo de nuestro Presidente.
                            Pasá a tu punto de venta favorito para disfrutar nuestras increíbles promociones.
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Última actualización 10 de enero 2024</small></p>
                        </div>
                    </div>
                </div>
            `;

            //añade cada tarjeta creada al contenedor de resultados resultsContainer utilizando appendChild().
            resultsContainer.appendChild(card);
        }
    }
}