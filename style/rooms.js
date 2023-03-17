//video
const play = document.querySelector(".iconplay");
const body = document.querySelector("body");

const videoSection = document.querySelector(".videosec");
const handleVideo = () => {
  const video = document.querySelector(".videoFrame");

  video.classList.remove("hidden");
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      video.classList.add("hidden");
    }
  });
};
play.addEventListener("click", () => {
  handleVideo();
});

//slider bottom
const previousButton = document.querySelector(".btn1");
const nextButton = document.querySelector(".btn2");
const slides = document.querySelectorAll(".left");
const countSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let active = 0;

const moveNext = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - active) * 100}%)`;
  });
};

function nextss() {
  if (active == countSlides - 2) {
    active = 0;
  } else {
    active++;
  }
  moveNext();
}
nextButton.addEventListener("click", nextss);

setInterval(() => {
  nextss();
}, 4500);

function prews() {
  if (active == 0) {
    active = countSlides - 2;
  } else {
    active--;
  }
  moveNext();
}

previousButton.addEventListener("click", prews);
