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
    if (e.code == 'Escape') {
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




var btna = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    btna.addClass('show');
  } else {
    btna.removeClass('show');
  }
});

btna.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

const nav = document.querySelector(".nav")
window.addEventListener('scroll', () => {
  if (window.scrollY > 900) { 
    nav.classList.add('fixed'); 
  } else {
    nav.classList.remove('fixed'); 
  }
});


const opentBtnR = document.querySelector("#PaswordRegistrI-2");
const closetBtnR = document.querySelector("#PaswordRegistrI-3");
const password = document.getElementById("Pasword");
closetBtnR.addEventListener("click", () => {
  closetBtnR.classList.add("hidden");
  opentBtnR.classList.remove("hidden");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
opentBtnR.addEventListener("click", () => {
  closetBtnR.classList.remove("hidden");
  opentBtnR.classList.add("hidden");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

const remember = document.querySelector(".not");
const loginContainer = document.querySelector(".login--container");
const registr = document.querySelector(".registr");
remember.addEventListener("click", () => {
  registr.classList.remove("hidden");
  loginContainer.classList.add("hidden");
});

let login = document.querySelector("#Login");
let email = document.querySelector("#Email");
let pass = document.querySelector("#Pasword");
const registerBtn = document.querySelector("#regist");

let users = [];
const refreshList = () => {
  if (localStorage.getItem(users)) {
    users = JSON.parse(localStorage.getItem(users));
  }
};
refreshList();
const addUser = (login, email, pass) => {
  if (login.value == "") {
    alert("Logini qeyd etmemisiz");
  } else if (email.value == "") {
    alert("Emaili qeyd etmemisiz");
  } else if (pass.value == "") {
    alert("Logini qeyd etmemisiz");
  } else {
    users.push({ login: login.value, mail: email.value, password: pass.value });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Qeyd oldunuz");
    refreshList();
  }
};
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(localStorage.getItem("users"));
  addUser(login, email, pass);
});
const loginName = document.getElementById("Username");
loginName.addEventListener("change", (e) => {
  console.log(e);
});
const passLog = document.getElementById("passwordLog");
const logBtn = document.getElementById("buttonLogin");
const check = () => {
  const pss = passLog.value;
  const log1 = loginName.value;
  const logged = JSON.parse(localStorage.getItem("users")).find(
    (x) => log1 == x.login
  );
  const loginNameStatus = logged.login == loginName.value;
  const passStatus = logged.password == passLog.value;
  if (passStatus && loginNameStatus) {
    alert(`Xos gelmisiz ${loginName.value}`);
    loginContainer.classList.add("hidden");
    overflow.classList.add("hidden");
    popop.classList.add('hidden')
    const z = loginName.value;
    popActiv.textContent = z;
    // console.log(z);
  } else if (!passStatus || !loginNameStatus){
    alert("Login ve ya password serfdir");
  }
};
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check()
});
const outP = document.querySelector(".outP");
outP.addEventListener("click", () => {
  registr.classList.add("hidden");
  loginContainer.classList.remove("hidden");
});
const overflow = document.querySelector(".overflow");
const popActiv = document.querySelector(".popActiv");
const PopSpan = document.querySelector(".PopSpan");
const popop  = document.querySelector('.popop ')
PopSpan.addEventListener("click", () => {
  loginContainer.classList.remove("hidden");
  overflow.classList.remove("hidden");
  popop.classList.remove('hidden')

});
overflow.addEventListener("click", () => {
  loginContainer.classList.add("hidden");
  overflow.classList.add("hidden");
  registr.classList.add("hidden");
  popop.classList.add('hidden')
});
// var arrayData = Object.entries(localStorage.getItem('users'));
// console.log(arrayData);
// console.log((localStorage.getItem('users')));
const obj = { ...localStorage.getItem("users") };
console.log(localStorage.getItem("users").login);
const opentBtn = document.querySelector(".open");
const closetBtn = document.querySelector(".close");
// const password = document.getElementById('Pasword')
closetBtn.addEventListener("click", () => {
  closetBtn.classList.add("hidden");
  opentBtn.classList.remove("hidden");
  if (passLog.getAttribute("type") === "password") {
    passLog.setAttribute("type", "text");
  } else {
    passLog.setAttribute("type", "password");
  }
});
opentBtn.addEventListener("click", () => {
  closetBtn.classList.remove("hidden");
  opentBtn.classList.add("hidden");
  if (passLog.getAttribute("type") === "password") {
    passLog.setAttribute("type", "text");
  } else {
    passLog.setAttribute("type", "password");
  }
});



