// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Carga la foto 360
panorama = new PANOLENS.ImagePanorama('imgs/pw_q1_360_car.png');



/* ***************** ********************* ***************** */
/* ***************** Zona de interacciones ***************** */
/* ***************** ********************* ***************** */


/* ***************** Zona Interacción #1 ***************** */
// var infospot1 = new PANOLENS. Infospot(50, PANOLENS.DataImage. Info);
var infospot1 = new PANOLENS.Infospot(50, 'imgs/pw_q1_360_icon_info.png');
infospot1.position.set(-500 ,-110 , -145);
infospot1.addHoverText('El Nissan Qashqai 2023 es un SUV compacto que destaca por su diseño moderno, tecnología avanzada y eficiencia. Ofrece una cabina cómoda con sistemas de infoentretenimiento actualizados y funciones de asistencia al conductor. Su motorización incluye opciones híbridas, combinando rendimiento y economía de combustible.', -60);

infospot1.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El Nissan Qashqai 2023 es un SUV compacto que destaca por su diseño moderno, tecnología avanzada y eficiencia. Ofrece una cabina cómoda con sistemas de infoentretenimiento actualizados y funciones de asistencia al conductor. Su motorización incluye opciones híbridas, combinando rendimiento y economía de combustible.</div>';

panorama.add (infospot1);

/* ***************** Zona Interacción #2 ***************** */
var infospot2 = new PANOLENS.Infospot(50, 'imgs/pw_q1_360_icon_info.png');
infospot2.position.set(-203 ,-108 , -500);
infospot2.addHoverText('El Nissan Qashqai 2024 mejora con un diseño renovado, mayor eficiencia en motorizaciones híbridas y nuevas funciones tecnológicas. Incorpora un sistema de infoentretenimiento más avanzado, mejores materiales en el interior y funciones de asistencia al conductor mejoradas, como la conducción semiautónoma y la detección de peatones.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El Nissan Qashqai 2024 mejora con un diseño renovado, mayor eficiencia en motorizaciones híbridas y nuevas funciones tecnológicas. Incorpora un sistema de infoentretenimiento más avanzado, mejores materiales en el interior y funciones de asistencia al conductor mejoradas, como la conducción semiautónoma y la detección de peatones.</div>';

panorama.add (infospot2);

/* ***************** Zona Interacción #3 ***************** */
var infospot3 = new PANOLENS.Infospot(50, 'imgs/pw_q1_360_icon_info.png');
infospot3.position.set(125 ,-124 , -500);
infospot3.addHoverText('', -60);
infospot3.element.innerHTML = `
    <div>
        <iframe style="width: 300px; height: 200px;" src="https://www.youtube.com/embed/NE6a6omkcf8" frameborder="0"></iframe>
    </div>
`;
panorama.add(infospot3);

/* ***************** Zona Interacción #4 ***************** */
var infospot4 = new PANOLENS.Infospot(75, 'imgs/pw_q1_360_icon_info.png');
infospot4.position.set(-315 ,-256 , 500);
infospot4.addHoverText('El sistema de financiamiento directo desde la agencia ofrece una solución conveniente y accesible para adquirir tu vehículo. Entre sus beneficios se incluyen tasas de interés competitivas, procesos de aprobación rápidos, y la posibilidad de personalizar el plan de pago según tus necesidades financieras. Además, la agencia ofrece asesoría personalizada para asegurar que elijas la opción que mejor se adapte a tu presupuesto.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El sistema de financiamiento directo desde la agencia ofrece una solución conveniente y accesible para adquirir tu vehículo. Entre sus beneficios se incluyen tasas de interés competitivas, procesos de aprobación rápidos, y la posibilidad de personalizar el plan de pago según tus necesidades financieras. Además, la agencia ofrece asesoría personalizada para asegurar que elijas la opción que mejor se adapte a tu presupuesto.</div>';

panorama.add (infospot4);

/* ***************** Zona Interacción #5 ***************** */
var infospot5 = new PANOLENS.Infospot(50, 'imgs/pw_q1_360_icon_info.png');
infospot5.position.set(243 ,-143 , 500);
infospot5.addHoverText('El servicio personalizado destaca por la atención exclusiva y adaptada a cada cliente, proporcionada por los mejores agentes. Estos profesionales altamente capacitados ofrecen asesoramiento especializado, soluciones a medida y un trato excepcional. Entre sus beneficios se incluyen una experiencia de compra más eficiente y satisfactoria, y una relación de confianza que asegura el máximo valor y satisfacción para cada cliente.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El servicio personalizado destaca por la atención exclusiva y adaptada a cada cliente, proporcionada por los mejores agentes. Estos profesionales altamente capacitados ofrecen asesoramiento especializado, soluciones a medida y un trato excepcional. Entre sus beneficios se incluyen una experiencia de compra más eficiente y satisfactoria, y una relación de confianza que asegura el máximo valor y satisfacción para cada cliente.</div>';

panorama. add (infospot5);

/* ***************** Zona Interacción #6 ***************** */
var infospot6 = new PANOLENS.Infospot(35, 'imgs/pw_q1_360_icon_info.png');
infospot6.position.set(-500 ,-104 , 130);
infospot6.addHoverText('Facilitamos el acceso a todos los servicios y artículos necesarios para el mantenimiento de tu auto, asegurando conveniencia y eficiencia. Nuestro amplio catálogo incluye desde piezas originales hasta herramientas especializadas, garantizando calidad y compatibilidad. Además, ofrecemos opciones de entrega rápida y asesoramiento experto para que mantengas tu vehículo en óptimas condiciones de manera sencilla y sin complicaciones.', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Facilitamos el acceso a todos los servicios y artículos necesarios para el mantenimiento de tu auto, asegurando conveniencia y eficiencia. Nuestro amplio catálogo incluye desde piezas originales hasta herramientas especializadas, garantizando calidad y compatibilidad. Además, ofrecemos opciones de entrega rápida y asesoramiento experto para que mantengas tu vehículo en óptimas condiciones de manera sencilla y sin complicaciones.</div>';

panorama.add (infospot6);

/* ***************** Zona Interacción #7 ***************** */
var infospot7 = new PANOLENS.Infospot(35, 'imgs/pw_q1_360_icon_info.png');
infospot7.position.set(-388 ,88 , 500);
infospot7.addHoverText('Nissan: Innovación, calidad, liderazgo.', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Nissan: Innovación, calidad, liderazgo.</div>';

panorama.add (infospot7);

/* ***************** Zona Interacción #8 ***************** */
var infospot8 = new PANOLENS.Infospot(35, 'imgs/pw_q1_360_icon_info.png');
infospot8.position.set(500 ,-18 , 75);
infospot8.addHoverText('Nissan: Rally Paris Dakar 2024', -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Nissan: Rally Paris Dakar 2024</div>';

panorama. add (infospot8);

/* ***************** Zona Interacción #9 ***************** */
var infospot9 = new PANOLENS.Infospot(35, 'imgs/pw_q1_360_icon_info.png');
infospot9.position.set(500 ,-65 , 137);
infospot9.addHoverText('', -60);
infospot9.element.innerHTML = '<div style="color: #000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/pw_q1_audio_rally.mp3"></div>';

panorama.add (infospot9);

// Agregar la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);



