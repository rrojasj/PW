// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');

// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container});
viewer.add(panorama);

//El valor 50 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escena y
//puede mostrar información o contenido adicional cuando el usuario interactúa con él (por ejemplo, al hacer clic o pasar el ratón por encima).

//El radio del infospot determina el área de interacción con el usuario.

// Crea y agrega el primer infospot

// Zona Interacción #1
var infospot1 = new PANOLENS. Infospot(50, PANOLENS.DataImage. Info);

// Establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);

//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como "3840 x 2160" para televisores 4K.', -60);

infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como "3840 x 2160" para televisores 4K.</div>';

panorama. add (infospot1);