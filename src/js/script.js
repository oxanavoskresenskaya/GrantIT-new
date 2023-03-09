gsap.from("header", {y: -20, duration:2, opacity: 0});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.container__nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('container__nav-menu_active');
})


function show_list() {
    let services = document.getElementById("services_id");

    if (services.style.display == "none") {
        services.style.display = "block";
    } else {
        services.style.display = "none";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown_list')) {
        document.getElementById('services_id')
            .style.display = "none";
    }
}   

function show_language() {
    let language = document.getElementById("language_id");

    if (language.style.display == "none") {
        language.style.display = "block";
    } else {
        language.style.display = "none";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.language_list')) {
        document.getElementById('language_id')
            .style.display = "none";
    }
}  