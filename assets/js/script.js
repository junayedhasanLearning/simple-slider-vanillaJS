const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slide = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const imgWidth = images[0].width;

let sliderNum = 1;
const imgNum = images.length;

const backToLastImg = () => {
  // Move the slider to the last image
  slide.style.transform = `translateX(-${(imgNum - 1) * imgWidth}px)`;
  sliderNum = imgNum;
};

const backToFirstImg = () => {
  // Move the slider to the first image
  slide.style.transform = `translateX(0px)`;
  sliderNum = 1;
};

const nextSlide = () => {
  if (sliderNum < imgNum) {
    slide.style.transform = `translateX(-${sliderNum * imgWidth}px)`;
    sliderNum++;
  } else {
    backToFirstImg();
  }
};

const prevSlide = () => {
  if (sliderNum > 1) {
    sliderNum--;
    slide.style.transform = `translateX(-${(sliderNum - 1) * imgWidth}px)`;
  } else {
    backToLastImg();
  }
};

right.addEventListener("click", nextSlide);
left.addEventListener("click", prevSlide);
