function cambiarEstilo(value){
    document.getElementById("linkEstilo").href=value;
}

function showCheckboxes(id) {
    var checkboxes = document.getElementById(id);
    if ( checkboxes.style.display === "none") {
        checkboxes.style.display = "block";
    } else {
        checkboxes.style.display = "none";
    }
}

function closeCheckbox(id){
    var checkboxes = document.getElementById(id);
    checkboxes.style.display = "none";
}

function sliderPrecio(idSlide, idTxt){
    var slider = document.getElementById(idSlide);
    var output = document.getElementById(idTxt);
    output.innerHTML = slider.value;
}