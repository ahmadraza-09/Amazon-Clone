
// Hero Section Slider
var counter = 0;
var images = [
    'Images/hero-banner1.jpg',
    'Images/hero-banner2.jpg',
    'Images/hero-banner3.jpg',
    'Images/hero-banner4.jpg',
    'Images/hero-banner5.jpg',
    'Images/hero-banner6.jpg',
    'Images/hero-banner7.jpg',
    'Images/hero-banner8.jpg'
 ];

function slideShow() {
    document.querySelector('.slider-image').src = images[counter];

    setTimeout(slideShow, 4000)
    if (counter >= images.length -1) {
        counter = 0;
    } else {
        counter++;
    }   
}

slideShow();

// Main Opacity Function
var opacityBox = document.querySelector('.opacity-box');
var headerOpacityBox = document.querySelector('.header-opacity-box');
var navSearch = document.querySelector('.nav-search');
var bodyScroll = document.querySelector('body');

function showMainOpacity() {
    opacityBox.style.display = 'block';
    bodyScroll.style.overflowY = 'hidden';
}

function removeOpacity() {
    opacityBox.style.display = 'none';
    bodyScroll.style.overflowY = 'visible';
    headerOpacityBox.style.display = 'none';
    navSearch.style.outline = 'none';
}

function showHeaderOpacity() {
    headerOpacityBox.style.display = 'block';
}


// Product Slider Functions 1
const initslider = () => {
    const imageList = document.querySelector(".slider-wrapper .box-slider");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
        });
    });

}

window.addEventListener("load", initslider);

// Product Slider Functions 2
const initslider2 = () => {
    const imageList2 = document.querySelector(".slider-wrapper2 .box-slider2");
    const slideButtons2 = document.querySelectorAll(".slider-wrapper2 .slide-button2");

    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction2 = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction2;
            imageList2.scrollBy({left: scrollAmount2, behavior: "smooth" });
        });
    });

}

window.addEventListener("load", initslider2);


