
// traducciones en español e inglés
const translations = {
    es: {
        optionMenu1: "Inicio",
        optionMenu2: "CV",
        optionMenu3: "Servicios",
        optionMenu4: "Proyectos",
        optionMenu5: "Contacto",
        optionMenu6: "Redes",
        title: "Desarrollo Web",
        buttonCv: "Descargar CV",
        espanish: "Español",
        english: "Ingles",
        title2: "Desarrollo web",
        p1: "Son las aplicaciones y programas que están disponibles en internet y que ayudan en el proceso de realizar diferentes tareas como la búsqueda de información, organización de datos, realización de presentaciones y actividades en el proceso de aprendizaje 2024. Bootstrap es el mejor framework CSS web.",
        title3: "Proyectos web",
        p2: "En esta guía encontrarás un paso a paso con todos los puntos de principio a fin de la captación, planificación y gestión de un proyecto eficientemente y sin sobresaltos 2024.",
        title4: "Proyecto 1",
        buttonJoin: "Ingresar",
        title5: "Proyecto 2",
        title6: "Proyecto 3",
        title7: "Contacto",
        p3: "Es un gusto atenderlo y brindarle su respuesta de manera rápida. Para su mejor servicio!",
        label1: "Nombre",
        label2: "Correo Electrónico",
        label3: "Asunto",
        label4: "Mensaje",
        buttonSend: "Enviar",
        title8: "Derechos Reservados",
        buttonText: "Traducir a ingles"
    },
    en: {
        optionMenu1: "Home",
        optionMenu2: "CV",
        optionMenu3: "Services",
        optionMenu4: "Projects",
        optionMenu5: "Contact",
        optionMenu6: "Social",
        title: "Web Development",
        buttonCv: "Download CV",
        spanish: "Spanish",
        english: "English",
        title2: "Web Development",
        p1: "These are the applications and programs available on the internet that help in the process of performing various tasks such as searching for information, organizing data, making presentations, and activities in the learning process of 2024. Bootstrap is the best web CSS framework.",
        title3: "Web Projects",
        p2: "In this guide, you will find a step-by-step process with all the points from beginning to end for the acquisition, planning, and management of a project efficiently and smoothly in 2024.",
        title4: "Project 1",
        buttonJoin: "Join",
        title5: "Project 2",
        title6: "Project 3",
        title7: "Contact",
        p3: "It's a pleasure to assist you and provide you with a quick response. For your best service!",
        label1: "Name",
        label2: "Email",
        label3: "Subject",
        label4: "Message",
        buttonSend: "Send",
        title8: "All Rights Reserved",
        buttonText: "Translate spanish"
    }
};

// funcion para cambiar el idioma
function changeLanguage() {
    //conversion 
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    // cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
            //elementos html sean tradudidos por la llave 
            element.innerHTML = translations[lang][key];
                     
    });
}