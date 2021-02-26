window.addEventListener('load', function(){

const menuButton = document.querySelector(".menu_button");
const navLinks = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
  navLinks.classList.toggle("hide");
})
;



let item = document.querySelectorAll("li");
const listItems =  document.querySelectorAll("li").length;
for (let item=0; item<listItems; item ++ ){
document.querySelectorAll("li")[item].addEventListener("click", function(){
  navLinks.classList.toggle("hide")
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

})
