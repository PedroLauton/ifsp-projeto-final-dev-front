//Constantes do menu responsivo
const ul = document.querySelector('nav ul');
const menux = "./imagens/x.png";
const menubarra = "./imagens/menu.png";

//Variáveis dos slides
let slideImagens = document.querySelectorAll(".slide");
let setaesquerda = document.querySelector("#seta-esquerda");
let setadireita = document.querySelector("#seta-direita");
let auxiliar = 0;

//Variáveis do zoom do mapa
var zoom = document.querySelector(".zoom");
var img = document.getElementById('perg');
var zoomBlack = document.querySelector(".zoom-black");

//Menu responsivo
botao.onclick = function(){
    if(ul.classList.contains('open')){
      ul.classList.remove('open')
      document.getElementById("botao").src = menubarra;
    }
    else{
      ul.classList.add('open')
      document.getElementById("botao").src = menux;
    }
}

ul.addEventListener("click", function () {
  ul.classList.remove('open');
  document.getElementById("botao").src = menubarra;
});

//Slides
function reset() {
  for (let i = 0; i < slideImagens.length; i++) {
    slideImagens[i].style.display = "none";
  }
}
function iniciarSlide() {
  reset();
  slideImagens[0].style.display = "block";
}
function slideesquerdo() {
  reset();
  slideImagens[auxiliar - 1].style.display = "block";
  auxiliar--;
}
function slidedireito() {
  reset();
  slideImagens[auxiliar + 1].style.display = "block";
  auxiliar++;
}
  
setaesquerda.addEventListener("click", function () {
  if (auxiliar === 0) {
    auxiliar = slideImagens.length;
  }
  slideesquerdo();
});

setadireita.addEventListener("click", function () {
  if (auxiliar === slideImagens.length - 1) {
    auxiliar = -1;
  }
  slidedireito();
});

iniciarSlide();

//Zoom do mapa
img.onclick = function(){
  zoom.style.display = "flex";
}
zoom.onclick = function() {
  zoomBlack.className += " out";
  setTimeout(function() {
     zoom.style.display = "none";
     zoomBlack.className = "zoom-black";
    }, 400);
}