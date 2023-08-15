import { animate } from "motion"

const slideImage = document.querySelectorAll(".slide-img");
const slidesContainer = document.querySelector(".slides-container");

const slideWidth = slideImage[0].clientWidth;
const screenSize = window.innerWidth;
const slideWidthVW = slideWidth / screenSize * 100;

let currentSlide = 0;
const numberOfImages = slideImage.length;


function goToSlide(slideNumber) {
    currentSlide = slideNumber;

    animate(
        slidesContainer,
        { transform: `translateX(-${slideWidthVW * slideNumber}vw)` }, 
        {
          duration: 1,
          easing: "ease-in-out"
        }
      )
}


function automateSlider() {
    let slideNumber = currentSlide;
    setInterval(() => {
        slideNumber++;
        if (slideNumber > numberOfImages - 1) {slideNumber = 0;}
        goToSlide(slideNumber);
    }, 3000);
}


automateSlider();


// window.onresize = function () {
//     // slideWidth = slideImage[0].clientWidth;
//     // slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
//     // console.log(slideWidth);

//     animate(
//         ".slides-container",
//         { transform: `translateX(-${slideWidth * slideNumber}px)` }
//       )
// }
