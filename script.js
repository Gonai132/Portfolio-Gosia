// MENU

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
    menu.classList.toggle("on");
    nav.classList.toggle("on");
})

// BANNER

let activeElement = 0;
const timeChange = 5000; 
let lastUpdateTime = Date.now(); 
let animationFrameId;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.info h1');
const h2Html = document.querySelector('.info h2');

const colorImages = ['img/banner_girl_color.png', 'img/banner_laptop_color.png'];
const grayImages = ['img/banner_girl_bw.png', 'img/banner_laptop_bw.png'];
const h1Info = ['Front-End Developer', 'Portfolio projektów'];
const h2Info = ['Margaret S.', 'aplikacji webowych'];


function changeElement() {
    activeElement = (activeElement + 1) % colorImages.length;
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = h1Info[activeElement];
    h2Html.textContent = h2Info[activeElement];
}

function animationLoop() {
    const currentTime = Date.now();
    if (currentTime - lastUpdateTime >= timeChange) {
        changeElement();
        lastUpdateTime = currentTime;
    }
    animationFrameId = requestAnimationFrame(animationLoop);
}

animationLoop();

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        lastUpdateTime = Date.now(); 
        animationLoop(); 
    } else {
        cancelAnimationFrame(animationFrameId); 
    }
});

// MODAL 

const button1 = document.querySelector(".column1 .price span");
const button2 = document.querySelector(".column2 .price span");
const button3 = document.querySelector(".column3 .price span");

const modalWrap = document.querySelector(".modal-wrap");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const main = document.querySelector("main");
const header = document.querySelector("header");

const spanHide1 = document.querySelector(".hide1");
const spanHide2 = document.querySelector(".hide2");
const spanHide3 = document.querySelector(".hide3");

button1.addEventListener("click", function () {
    modalWrap.classList.add("active");
    modal1.classList.add("active");
    main.classList.add("blur");
    header.classList.add("blur");
})

spanHide1.addEventListener("click", function () {
    modalWrap.classList.remove("active");
    modal1.classList.remove("active");
    main.classList.remove("blur");
    header.classList.remove("blur");
})

button2.addEventListener("click", function () {
    modalWrap.classList.add("active");
    modal2.classList.add("active");
    main.classList.add("blur");
    header.classList.add("blur");
})

spanHide2.addEventListener("click", function () {
    modalWrap.classList.remove("active");
    modal2.classList.remove("active");
    main.classList.remove("blur");
    header.classList.remove("blur");
})

button3.addEventListener("click", function () {
    modalWrap.classList.add("active");
    modal3.classList.add("active");
    main.classList.add("blur");
    header.classList.add("blur");
})

spanHide3.addEventListener("click", function () {
    modalWrap.classList.remove("active");
    modal3.classList.remove("active");
    main.classList.remove("blur");
    header.classList.remove("blur");
})

// CONTACT MAIL

const msgStatus = document.querySelector(".msg-status");
const urlParams = new URLSearchParams(window.location.search);
const mailStatus = urlParams.get("mail_status");

if (mailStatus === "sent") {
    msgStatus.classList.add("success");
    msgStatus.textContent = "Wiadomość wysłana!";

    setTimeout(() => {
        msgStatus.classList.remove("success");
        msgStatus.textContent = "";
    }, 3000);
}

if (mailStatus === "error") {
    msgStatus.classList.add("error");
    msgStatus.textContent = "Wystąpił błąd...";

    setTimeout(() => {
        msgStatus.classList.remove("error");
        msgStatus.textContent = "";
    }, 3000);
}

// ANIMATIONS ME

let box1 = document.querySelector(".me div");
let box2 = document.querySelector(".me aside");

setInterval(function() {console.log(box2.getBoundingClientRect().top)}), 1000;

box1.classList.add("move3");
box2.classList.add("move2");

setInterval(function(){
    box2.getBoundingClientRect().top <= 500 ?
    changeClass(): null
});

function changeClass() {
    box1.classList.remove("move3");
    box1.classList.add("move1");
    box2.classList.remove("move2");
    box2.classList.add("move1");
    
}

// ANIMATIONS GALLERY

let box3 = document.querySelector(".gallery h3");

setInterval(function() {console.log(box3.getBoundingClientRect().top)}), 1000;

box3.classList.add("move2gallery");

setInterval(function(){
    box3.getBoundingClientRect().top <= 500 ?
    changeClass2(): null
});

function changeClass2() {
    box3.classList.remove("move2gallery");
    box3.classList.add("move1gallery");
}

// ANIMATIONS MOTTO

let box5 = document.querySelector(".motto h3");
let box6 = document.querySelector(".motto p");
let box7 = document.querySelector(".motto p.author");
let box8 = document.querySelector(".motto");

setInterval(function() {console.log(box5.getBoundingClientRect().top)}), 1000;

box5.classList.add("move5");
box6.classList.add("move5");
box7.classList.add("move5");
box8.classList.add("move7");

setInterval(function(){
    box5.getBoundingClientRect().top <= 800 ?
    changeClass3(): null
});

function changeClass3() {
    box5.classList.remove("move5");
    box5.classList.add("move4");
    box6.classList.remove("move5");
    box6.classList.add("move4");
    box7.classList.remove("move5");
    box7.classList.add("move4");
    box8.classList.remove("move7");
    box8.classList.add("move8");
}

// ANIMATIONS PACKAGES

let box9 = document.querySelector(".packages h3");
let box10 = document.querySelector(".packages .column1");
let box11 = document.querySelector(".packages .column2");
let box12 = document.querySelector(".packages .column3");

setInterval(function() {console.log(box9.getBoundingClientRect().top)}), 1000;

box9.classList.add("move9");
box10.classList.add("move10");
box11.classList.add("move10");
box12.classList.add("move10");

setInterval(function(){
    box9.getBoundingClientRect().top <= 500 ?
    changeClass4(): null
});

function changeClass4() {
    box9.classList.remove("move9");
    box9.classList.add("move11");
    box10.classList.remove("move10");
    box10.classList.add("move11");
    box11.classList.remove("move10");
    box11.classList.add("move11");
    box12.classList.remove("move10");
    box12.classList.add("move11");
}

// ANIMATIONS CONTACT

let box13 = document.querySelector(".contact h3");
let box14 = document.querySelector(".contact form");
let box15 = document.querySelector(".contact .socials");

setInterval(function() {console.log(box13.getBoundingClientRect().top)}), 1000;

box13.classList.add("move12");
box14.classList.add("move14");
box15.classList.add("move15");

setInterval(function(){
    box13.getBoundingClientRect().top <= 100 ?
    changeClass5(): null
});

function changeClass5() {
    box13.classList.remove("move12");
    box13.classList.add("move13");
    box14.classList.remove("move14");
    box14.classList.add("move16");
    box15.classList.remove("move15");
    box15.classList.add("move16");
}



