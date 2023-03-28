gsap.from("header", {y: -20, duration:2, opacity: 0});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.container__nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('container__nav-menu_active');
});



const services = document.querySelector('#services_id');
const list = document.querySelector('.dropdown_list');

function showList() {
    services.style.display = 'block';
}

function hideList() {
    services.style.display = 'none';
}

window.addEventListener('click', (e) => {
    const target = e.target;

    if ((target && target !== list) || services.style.display == 'block') {
    hideList();
    } else {
    showList();
    }
});

const language = document.querySelector('#language_id');
const languageList = document.querySelector('.language_list');

function showLanguage() {
    language.style.display = 'block';
}

function hideLanguage() {
    language.style.display = 'none';
}

window.addEventListener('click', (e) => {
    const target = e.target;

    if ((target && target !== languageList) || language.style.display == 'block') {
    hideLanguage();
    } else {
    showLanguage();
    }
});

const vendorsMicrosoft = document.querySelector('#microsoft');
vendorsMicrosoft.addEventListener ('click', function(){
    window.open('https://www.microsoft.com/tr-tr/', '_blank'); 
});

const blockTwo = document.querySelector('#ibm');
blockTwo.addEventListener ('click', function(){
    window.open('https://www.ibm.com/case-studies/search?lnk=flatitem', '_blank'); 
});

const blockThree = document.querySelector('#oracle');
blockThree.addEventListener ('click', function(){
    window.open('https://developer.oracle.com/community/events/devlive-level-up-march-2023.html?source=:ow:o:h:feb:::RC_WWMK221215P00004:DevLive_LevelUp_March2023_HomepageCarousel&intcmp=:ow:o:h:feb:::RC_WWMK221215P00004:DevLive_LevelUp_March2023_HomepageCarousel', '_blank'); 
});


