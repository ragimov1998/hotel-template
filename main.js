// const rooms = document.querySelectorAll(".rooms")
const prev = document.querySelector(".next");
const next = document.querySelector(".prev");
const play = document.querySelector(".iconplay");
const body = document.querySelector("body");
const sliders = document.querySelectorAll(".rooms");

let len = sliders.length;

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

let counter = 1;

function prew() {
  if (counter === 0) {
    counter = len - 2;
    if (counter === len - 2) {
      counter--;
    }
  } else {
    counter--;
  }

  sliders.forEach((element, index) => {
    element.style.transform = `translateX(${(index - counter) * 105}%)`;
  });

  next.addEventListener("click", () => {});
}
console.log(prew());

prev.addEventListener("click", prew);

counter = 0;

function nexts() {
  if (counter === len - 3) {
    counter = 0;
  } else {
    counter++;
  }

  sliders.forEach((element, index) => {
    element.style.transform = `translateX(${(index - counter) * 105}%)`;
  });
  prev.addEventListener("click", () => {});
}

next.addEventListener("click", nexts);

setInterval(() => {
  nexts();
}, 2500);





//slider bottom

const previousButton = document.querySelector(".btn1")
const nextButton = document.querySelector(".btn2")
const slides = document.querySelectorAll(".left")
const countSlides = slides.length

slides.forEach((slide, index)=>{
  slide.style.transform = `translateX(${index*100}%)`
})

let active = 0

const moveNext = () => {

  slides.forEach((slide, index)=>{
    slide.style.transform = `translateX(${(index-active)*100}%)`
  })
}

function nextss (){
  if (active == countSlides-2){
    active=0
  }
  else {
    active++
  }
  moveNext()
}
nextButton.addEventListener("click", nextss)

setInterval(() => {
  nextss();
}, 4500);

function prews (){
  if (active == 0 ) {
    active = countSlides - 2
  }
  else {
    active--
  }
  moveNext()
}

previousButton.addEventListener("click",prews)




