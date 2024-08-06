const translations = {
    es: {
        /******************* Page: Navbar *******************/
        // Menú de opciones
        optionMenu1: "Inicio",
        optionMenu2: "Comprar",
        optionMenu3: "Vender",
        optionMenu4: "Autos",
        optionMenu4_1: "Clasicos",
        optionMenu4_2: "Nuevos",
        optionMenu4_3: "Usados",
        optionMenu5: "Información",
        optionMenu5_1: "Crédito",
        optionMenu5_2: "Nosotros",
        optionMenu5_3: "Sucursales",
        optionMenu5_4: "Contáctenos",
        optionMenu5_5: "Tour virtual",
        optionMenu5_6: "Escenario 3D",
        optionMenu6: "Galería",
        optionMenu6_1: "Autos Nuevos",
        optionMenu6_2: "Autos Usados",
        optionMenu6_3: "Autos Clásicos",
        optionMenu6_4: "Galería General",

        /******************* Page: home.html *******************/
        // Cards de Opciones
        optionsTitle1: "Nuevos",
        optionsTitle2: "Usados",
        optionsTitle3: "Crédito",
        optionsTitle4: "Clásicos",
        optionsSubTitle1: "Lo último en autos",
        optionsSubTitle2: "Alternativas únicas",
        optionsSubTitle3: "Opciones flexibles",
        optionsSubTitle4: "Íconos del pasado",
        // Combo de Galería
        galleryTitle: "¡Visite nuestra galería de autos!",
        galleryText: "Al seleccionar el origen y marca, accederás a nuestra galería exclusiva de autos clásicos. Cada imagen captura la elegancia de estos vehículos icónicos, ya sean muscle cars estadounidenses o deportivos europeos, permitiéndote explorar sus detalles.",
        // Stock de ofertas
        carModel1: "Modelo 2019",
        carModel2: "Modelo 2022",
        carModel3: "Modelo 2023",
        carModel4: "Modelo 2013",
        carModel5: "Modelo 2021",
        carModel6: "Modelo 2020",
        offersTitle: "Stock Ofertas",
        offersMiles1: "17,413 Millas",
        offersMiles2: "38,346 Millas",
        offersMiles3: "7,737 Millas",
        offersMiles4: "51,406 Millas",
        offersMiles5: "41,889 Millas",
        offersMiles6: "37,160 Millas",
        offersTypeGearbox1: "Automático",
        // Suscripción
        subscriptionTitle: "¡Suscríbete y recibe ofertas exclusivas!",
        subscriptionText: "Al seleccionar el tipo de auto serás dirigido a la galería correspondiente, donde podrás explorar en detalle nuestra selecta colección. Cada imagen captura la elegancia y el carácter único de estos vehículos, transportándote a través de las épocas y dejándote inspirado por el diseño automotriz.",
        subscriptionEmailPH: "Ingresa tu correo",
        subscriptionNamePH: "Ingresa tu nombre",
        subscriptionBtn: "Suscribirse",
        alertMsg: "Por favor ingresar un correo electrónico",
        emailSharingMessage: "Nunca compartiremos su correo electrónico con nadie más",

        /******************* Page: showroom.html *******************/
        tourTitle: "Tour Virtual",
    },
    en: {
        /******************* Page: Navbar *******************/
        // Options menu
        optionMenu1: "Home",
        optionMenu2: "Buy",
        optionMenu3: "Sell",
        optionMenu4: "Cars",
        optionMenu4_1: "Classics",
        optionMenu4_2: "New",
        optionMenu4_3: "Used",
        optionMenu5: "Information",
        optionMenu5_1: "Credit",
        optionMenu5_2: "About us",
        optionMenu5_3: "Offices",
        optionMenu5_4: "Contact us",
        optionMenu5_5: "Virtual showroom",
        optionMenu5_6: "3D scenario",
        optionMenu6: "Gallery",
        optionMenu6_1: "New cars",
        optionMenu6_2: "Used cars",
        optionMenu6_3: "Classic cars",
        optionMenu6_4: "General Gallery",

        /******************* Page: home.html *******************/
        // Option cards
        optionsTitle1: "New",
        optionsTitle2: "Used",
        optionsTitle3: "Credit",
        optionsTitle4: "Classics",
        optionsSubTitle1: "The latest in cars",
        optionsSubTitle2: "Unique alternatives",
        optionsSubTitle3: "Flexible options",
        optionsSubTitle4: "Icons of the past",
        // Visit Gallery
        galleryTitle: "¡Visit our car gallery!",
        galleryText: "By selecting the type of car you will be directed to the corresponding gallery, where you can explore our select collection in detail. Each image captures the elegance and unique character of these vehicles, transporting you through the ages and leaving you inspired by automotive design.",
        // Stock offers
        carModel1: "Model 2019",
        carModel2: "Model 2022",
        carModel3: "Model 2023",
        carModel4: "Model 2013",
        carModel5: "Model 2021",
        carModel6: "Model 2020",
        offersTitle: "Stock Offers",
        offersMiles1: "17,413 Miles",
        offersMiles2: "38,346 Miles",
        offersMiles3: "7,737 Miles",
        offersMiles4: "51,406 Miles",
        offersMiles5: "41,889 Miles",
        offersMiles6: "37,160 Miles",
        offersTypeGearbox1: "automatic",
        // Subscription
        subscriptionTitle: "Subscribe and receive exclusive offers!",
        subscriptionText: "By subscribing, you will receive weekly updates on the latest industry news, reviews of the most popular models, information on promotions and special events from our agency.",
        subscriptionEmailPH: "Enter your email",
        subscriptionNamePH: "Enter your name",
        subscriptionBtn: "Subscribe",
        alertMsg: "Please enter an email",
        emailSharingMessage: "We'll never share your email with anyone else.",

        /******************* Page: showroom.html *******************/
        tourTitle: "Virtual showroom",
    }
}

function changeLanguage() {
    // Obtiene el idioma actual y cambia al otro idioma
    const lang = document.documentElement.lang === 'en' ? 'es' : 'en';
    document.documentElement.lang = lang;

    // Cambia el texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];
        
        // Verifica si el elemento es un input para cambiar el placeholder
        if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translation);
        } else {
            element.innerHTML = translation;
        }
    });
}