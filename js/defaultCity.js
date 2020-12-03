const defaultCity = localStorage.getItem(0);
const defaultBtn = document.querySelector('.default-button');
defaultBtn.addEventListener('click', defaultTrigger);

window.addEventListener("load", function() {
    loadDefault();
}); 


function checkDefault() {
    if(localStorage.getItem(0) == ''){
        defaultCity = "Denver";
        return false;
    } else {
        defaultCity = localStorage.getItem(0);
        return true;
    }
}

function loadDefault() {
    if(checkDefault){
        getResults(defaultCity)
    }
}

function setDefault(city) {
    localStorage.setItem(0, city);
    if(localStorage.getItem(0) === city){
        console.log("City set successfully.");
    } else {
        console.log("City setting failed");
    }
}

function defaultTrigger(evt) {
    console.log(searchbox.value);
    setDefault(searchbox.value);
}