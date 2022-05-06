
// -----HOME PAGE----animation----
           const hello = document.querySelector('.hello')
           const homeSentence = document.querySelectorAll('#homeSentence')
           const helloTop = hello.getBoundingClientRect().top
           const windowHeigth = window.innerHeight 
           if(helloTop < windowHeigth){
              homeSentence.forEach((item)=>{
              item.style.fontSize='0px'
           })
            setTimeout(()=>{
              hello.style.transition='all 1s ease'
              hello.style.fontSize='1.6em'
              homeSentence.forEach((item)=>{
                item.style.transition='all 0.5s ease'
                item.style.fontSize=''
              })
            },2200)
        }

//LOADERS----and say hello

// const loaderContainer = document.getElementById("loaderContainer")
// const content = document.getElementById("content")
// const hello = document.querySelector('.hello')
// const homeSentence = document.querySelectorAll('#homeSentence')
// const helloTop = hello.getBoundingClientRect().top
// const windowHeigth = window.innerHeight 


// function preLoader() {
//   if(location.hash === ''){ //  load just once
//     setTimeout(showPage,3800);
//     }
//     else{ // if there is a hash DO NOT load and DO NOT say hello 'AGAIN'
//       loaderContainer.style.display = "none";
//       content.style.display = "block";
//       content.style.transition='all .1s ease'
//       hello.style.fontSize='1.6em'
//     }
//   }    
     
    

//     function showPage() {
//        loaderContainer.style.display = "none";
//         content.style.display = "block";
//           //-----HOME PAGE----animation----
//            if(helloTop < windowHeigth){
//               homeSentence.forEach((item)=>{
//               item.style.fontSize='0px'
//            })
//             setTimeout(()=>{
//               hello.style.transition='all 1s ease'
//               hello.style.fontSize='1.6em'
//               homeSentence.forEach((item)=>{
//                 item.style.transition='all 0.5s ease'
//                 item.style.fontSize=''
//               })
//             },2200)
//         }
//     }


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


//------------PORTFOLIO-------------

// click over project
const ContOverImg = document.querySelectorAll('.cont-over-img')

ContOverImg.forEach((item)=>{
  item.addEventListener('click',()=>{
      item.classList.add('remove-transp-background')
      setTimeout(()=>{
        item.classList.remove('remove-transp-background')
      },4000)     
  })
})
const Img1 = document.getElementById('img1')
Img1.addEventListener('click',()=>{
  setTimeout(()=>{
    location.href='./portfolio-projects/counter_project.html'
  },1000)
})
const Img2 = document.getElementById('img2')
Img2.addEventListener('click',()=>{
  setTimeout(()=>{
    location.href='portfolio-projects/book_project.html'
  },1000)
})
const img3 = document.getElementById('img3')
img3.addEventListener('click',()=>{
  setTimeout(()=>{
    location.href='portfolio-projects/portfolio_project.html'
  },1000)
})
const img4 = document.getElementById('img4')
img4.addEventListener('click',()=>{
  setTimeout(()=>{
    location.href='portfolio-projects/oldportfolio_project.html'
  },1000)
})


// --------ANIMATION ON SCROLL EVENT-------------------------------


window.addEventListener('scroll', checkItemOnScroll)

function checkItemOnScroll(){
    const triggerBottom = window.innerHeight /4.3 * 4

    
    //---SKILL---move progress bar--
    const progress = document.querySelectorAll('.progress')
    progress.forEach((item)=>{
        const itemTop = item.getBoundingClientRect().top

        if(itemTop < triggerBottom){
          item.style.width='100%'
        }else{
          item.style.width='0%'
        }
    })

    //---PORTFOLIO----move project
    const projectItem = document.querySelectorAll('.project')
    projectItem.forEach((item)=>{
        const itemTop = item.getBoundingClientRect().top

        if(itemTop < triggerBottom){
          item.classList.add('show-project')
        }else{
        item.classList.remove('show-project')
        }
    })

    //---FOOTER---contact-me-link
    const contactMeLink = document.getElementById('contactLink')
    const contactMeTop = contactMeLink.getBoundingClientRect().top

    if(contactMeTop < triggerBottom){
        contactMeLink.classList.add('contact-link-animation')
      }else{
      contactMeLink.classList.remove('contact-link-animation')
      }

}




