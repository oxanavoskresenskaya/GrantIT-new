gsap.from("header", {y: -20, duration:2, opacity: 0});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.container__nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('container__nav-menu_active');
})

gsap.to('#par', {
    text: "GRANTIT is an international information technology sales company.",
    duration: 9,
    delay: 3,
    repeat: -1,
    repeatDelay: 1,
    ease: "power1.in",
});

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

const blockOne = document.querySelector('#microsoft');

blockOne.addEventListener ('click', function(){
    window.open('https://www.microsoft.com/en-us/security/blog/2022/12/15/do-more-with-less-with-microsoft-security-3-strategies-to-get-you-started/', '_blank'); 
});

const blockTwo = document.querySelector('#ibm');

blockTwo.addEventListener ('click', function(){
    window.open('https://www.ibm.com/case-studies/search?lnk=flatitem', '_blank'); 
});
const blockThree = document.querySelector('#oracle');
blockThree.addEventListener ('click', function(){
    window.open('https://developer.oracle.com/community/events/devlive-level-up-march-2023.html?source=:ow:o:h:feb:::RC_WWMK221215P00004:DevLive_LevelUp_March2023_HomepageCarousel&intcmp=:ow:o:h:feb:::RC_WWMK221215P00004:DevLive_LevelUp_March2023_HomepageCarousel', '_blank'); 
});


