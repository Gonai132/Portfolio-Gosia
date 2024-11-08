// MENU

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
    menu.classList.toggle("on");
    nav.classList.toggle("on");
})

// BANNER

let activeElement = 0;
const timeChange = 6000;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.info h1');
const h2Html = document.querySelector('.info h2');

const colorImages = ['img/banner_girl_color.png', 'img/banner_laptop_color.png'];
const grayImages = ['img/banner_girl_bw.png', 'img/banner_laptop_bw.png'];
const h1Info = ['Front-End Developer', 'Portfolio projektów'];
const h2Info = ['Margaret S.', 'aplikacji webowych'];

function changeElement() {
 activeElement++;
 if (activeElement == colorImages.length) {
  activeElement = 0;
 }
 colorImgHtml.src = colorImages[activeElement];
 grayImgHtml.src = grayImages[activeElement];
 h1Html.textContent = h1Info[activeElement];
 h2Html.textContent = h2Info[activeElement];

}

// MODAL 

setInterval(changeElement, timeChange);

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

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
    msgStatus.classList.add("success")
    msgStatus.textContent = "Wiadomość wysłana!"

    setTimeout(() => {
        msgStatus.classList.remove("success")
    }, 3000);
}

if (document.location.search === '?mail_status=error') {
    msgStatus.classList.add("error")
    msgStatus.textContent = "Wystąpił błąd..."

    setTimeout(() => {
        msgStatus.classList.remove("error")
    }, 3000);
}


