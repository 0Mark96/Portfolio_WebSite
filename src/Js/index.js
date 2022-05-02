// ------------------------------------Header effect mobile-------------------------------------
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

//--------------------------Skill--------

// move progress bar

const progress = document.querySelectorAll('.progress')
console.log(progress)
window.addEventListener('scroll', checkProgress)


function checkProgress(){
    const triggerBottom = window.innerHeight /5 * 4
    
    progress.forEach((item)=>{
        const itemTop = item.getBoundingClientRect().top

        if(itemTop < triggerBottom){
          item.style.width='100%'
        }else{
          item.style.width='0%'
        }
    })
}


//------------------------------PORTFOLIO-------------

// click over project
const ContOverImg = document.querySelectorAll('.cont-over-img')

ContOverImg.forEach((item)=>{
  item.addEventListener('click',()=>{
      item.classList.add('transp-background')
      setTimeout(()=>{
         location.href='../index.html#skill' 
      },1000)
      
  })
})

// move project item on SCROLL
const projectItem = document.querySelectorAll('.project')

window.addEventListener('scroll', checkProject)


function checkProject(){
    const triggerBottom = window.innerHeight /5 * 4
    
    projectItem.forEach((item)=>{
        const itemTop = item.getBoundingClientRect().top

        if(itemTop < triggerBottom){
          item.classList.add('show-project')
        }else{
            item.classList.remove('show-project')
        }
    })
}






