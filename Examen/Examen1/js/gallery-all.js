document.getElementById('brand-gallery-select').addEventListener('change', showBrandOptions);


function showBrandOptions() {
    var selectedOption = document.getElementById('brand-gallery-select').value;

    switch(selectedOption){
        case "new":
            document.querySelector('.new-gallery').style.display = "block";
            document.querySelector('.used-gallery').style.display = "none";
            document.querySelector('.classic-gallery').style.display = "none";
            break;
        case "used":
            document.querySelector('.new-gallery').style.display = "none";
            document.querySelector('.used-gallery').style.display = "block";
            document.querySelector('.classic-gallery').style.display = "none";
            break;
        case "classic":
            document.querySelector('.new-gallery').style.display = "none";
            document.querySelector('.used-gallery').style.display = "none";
            document.querySelector('.classic-gallery').style.display = "block";
            break;
        default:
            document.querySelector('.new-gallery').style.display = "block";
            document.querySelector('.used-gallery').style.display = "block";
            document.querySelector('.classic-gallery').style.display = "block";
            break;
    }
}