// -------------------------------------------------Header-------------------------------------
const navMenu = document.getElementById('navMenu');
const body = document.querySelector('body');
const header = document.querySelector('header')
const navLinkContainer = document.getElementById('navLinkContainer');
const navLink = document.querySelectorAll('#navLink');



//close menu icon
navMenu.addEventListener('click', ()=>{
           navMenu.classList.toggle('active');
           body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';

})

// hide header onScroll
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

//menu toggle on click over icon
navMenu.addEventListener('click',()=>{
    header.classList.toggle('menu-container')
    navLinkContainer.style.marginTop = navLinkContainer.style.marginTop > '0px' ? '-100vh' : '10vh'
})

//close menu on click over link 
navLink.forEach (element => {
    element.addEventListener('click',()=>{
    header.classList.toggle('menu-container')
    navLinkContainer.style.marginTop = navLinkContainer.style.marginTop > '0px' ? '-100vh' : '10vh'
    navMenu.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
})
})



