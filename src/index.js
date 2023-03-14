const menu = document.getElementById('btn-mobile');

function Tooglemenu(){
   const nav = document.querySelector('nav');
   nav.classList.toggle('activeMenu');
}

menu.addEventListener('click', Tooglemenu);
