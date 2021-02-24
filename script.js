window.addEventListener('load', function(){

let menuButton = document.querySelector(".menu_button");
let navLinks = document.querySelector("nav");

menuButton.addEventListener("click", function(){
  if (navLinks.style.display && navLinks.style.display !== 'none') {
    navLinks.style.display = 'none';
} else {
  navLinks.style.display = 'block';
}
});



let item = document.querySelectorAll("li");
const listItems =  document.querySelectorAll("li").length;
for (let item=0; item<listItems; item ++ ){
document.querySelectorAll("li")[item].addEventListener("click", function(){
  navLinks.style.display = "none"
});
}


window.onscroll = function(){scrollFunction()};
const scrolltop = document.querySelector(".scrolltop");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolltop.style.display = "block";
  } else {
    scrolltop.style.display = "none";
  }
};

const back = document.querySelector(".back_button");
console.log('eeeee', back);
back?.addEventListener("click", function(){
  window.history.back();
});
});



