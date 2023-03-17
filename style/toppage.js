var btna = $('#button');


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
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