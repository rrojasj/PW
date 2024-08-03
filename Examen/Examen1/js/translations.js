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
        optionMenu5_2: "Galería",
        optionMenu5_3: "Nosotros",
        optionMenu5_4: "Sucursales",
        optionMenu5_5: "Contáctenos",
        optionMenu5_6: "Tour virtual",

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
        subscriptionText: "Al suscribirte, recibirás semanalmente las últimas noticias sobre la industria, reseñas de los modelos más destacados, información sobre promociones y eventos especiales de nuestra agencia.",
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
        optionMenu5_2: "Gallery",
        optionMenu5_3: "About us",
        optionMenu5_4: "Offices",
        optionMenu5_5: "Contact us",
        optionMenu5_6: "Virtual showroom",

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