//close menu icon
const navMenu = document.getElementById('navMenu');

navMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})

// hide header onScroll
const header = document.querySelector('header')
let prevScrollPos = window.pageYOffset
window.onscroll = function(){
 let currentScrolPos = window.pageYOffset
 if(prevScrollPos > currentScrolPos){
     header.style.top='0'
 }else{
     header.style.top = '-100px'
 }
 prevScrollPos = currentScrolPos
} 

//menu on click

const menuLink = document.getElementById('menuLink');
navMenu.addEventListener('click',async()=>{
    header.classList.toggle('menu-container')
    menuLink.classList.toggle('menu-link')
    
})
//---------------------------------------------------------------------

