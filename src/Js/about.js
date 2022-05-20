// ----------------------Header effect mobile-------------------------------------
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
    navLinkContainer.style.marginTop = navLinkContainer.style.marginTop > '0px' ? '-900px' : '10vh'
})

//close menu on click over link 
navLink.forEach (element => {
    element.addEventListener('click',()=>{
    header.classList.toggle('menu-container')
    navLinkContainer.style.marginTop = navLinkContainer.style.marginTop > '0px' ? '-900px' : '10vh'
    navMenu.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
})
})

// --------ANIMATION ON SCROLL EVENT-------------------------------


window.addEventListener('scroll', checkItemOnScroll)

function checkItemOnScroll(){
    const triggerBottom = window.innerHeight /4.3 * 4

    //---FOOTER---contact-me-link
    const contactMeLink = document.getElementById('contactLink')
    const contactMeTop = contactMeLink.getBoundingClientRect().top

    if(contactMeTop < triggerBottom){
        contactMeLink.classList.add('contact-link-animation')
      }else{
      contactMeLink.classList.remove('contact-link-animation')
      }

      //---bio---animation
      const bioContainer= document.querySelectorAll('.date-and-bio-container1')
      
      bioContainer.forEach((item)=>{
      const bioContainerTop= item.getBoundingClientRect().top
      if(bioContainerTop < triggerBottom){
      item.style.transform='scale(1,1)'
      item.style.transition='all 1s ease'
      }
          
      }  )
}

//--bio--animation-with NO scroll
const bioContainer= document.querySelectorAll('.date-and-bio-container1')
const windowHeigth = window.innerHeight

bioContainer.forEach((item)=>{
const bioContainerTop= item.getBoundingClientRect().top
if(bioContainerTop < windowHeigth){
item.style.transform='rotateX(0deg)'
item.style.transition='all 1s ease'
}
    
}   
)  






