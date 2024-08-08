/********** Sección: Mostrar imagen correcta **********/
/** 
 * @name show3DModel
 * @description Se encarga de mostrar el escenario 3D correcto de acuerdo a la opción seleccionada
 * @params brand
 **/
function show3DModel(brand) {
    // var modelViewerSection = document.getElementById('model-3d');
    var viewerSection = document.getElementById('model-container');
    var modelViewerBG = "/imgs/pw_e1_scene_3d_background.webp"

    viewerSection.innerHTML = "";
    

    if (brand == "bmw") {
        modelImgSrc = "assets/pw_e1_scence_3d_bmw.glb";
    } else if (brand == "mb") {
        var modelImgSrc = "assets/pw_e1_scence_3d_mb.glb";
    } else if (brand == "vw") {
        var modelImgSrc = "assets/pw_e1_scence_3d_vw.glb";
    }

    var modelImg = document.createElement('div');

    modelImg.innerHTML = `
        <model-viewer id="model-3d" src="${modelImgSrc}" style="width: 1200px; height: 800px; display: block; margin: 0 auto; background-size: cover; background-position: center; background-image: url('${modelViewerBG}'); box-shadow: 0 0 10px rgba(15, 69, 87, 0.5), 10px 0 10px rgba(15, 69, 87, 0.5), 0 10px 10px rgba(15, 69, 87, 0.5), -10px 0 10px rgba(15, 69, 87, 0.5);" alt="${brand} 3D" camera-controls auto-rotate></model-viewer>
    `
    viewerSection.appendChild(modelImg);
}

// class="wow animate__animated animate__zoomIn animate__delay-500ms" 