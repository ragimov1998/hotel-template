const switchbox = document.querySelector("#check");
const list = document.querySelectorAll(".clic");

console.log(list);


const bg = document.querySelector(".main");
const cursor = document.querySelector(".switch");

  switchbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      cursor.style.left = "100%";
      cursor.style.transform = "translateX(-86%)";
      bg.style.background = "black";
    } else {
      cursor.style.left = "0";
      cursor.style.transform = "translateX(0)";
      bg.style.background = "green";
    }
  });
  
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    
    
  });
});
