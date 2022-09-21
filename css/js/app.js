const menu=document.querySelector(".menu");
const abrirMenuBtn=document.querySelector(".abrirMenu");
const cerrarMenuBtn=document.querySelector(".cerrarMenu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

abrirMenuBtn.addEventListener("click",toggleMenu);
cerrarMenuBtn.addEventListener("click",toggleMenu);