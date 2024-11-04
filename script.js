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

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.info h1');
const h2Html = document.querySelector('.info h2');

const colorImages = ['img/banner_girl_color.png', 'img/banner_boy_color.png'];
const grayImages = ['img/banner_girl_bw.png', 'img/banner_boy_bw.png'];
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

setInterval(changeElement, timeChange)