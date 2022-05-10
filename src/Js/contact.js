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


// animation

const h1getInTouch = document.getElementById('h1getInTouch') 
const formContainer = document.querySelector('.form-container')
const h1Top = h1getInTouch.getBoundingClientRect().top
const windowHeigth = window.innerHeight

if(h1Top < windowHeigth){
    h1getInTouch.style.transform='translatex(0px)'
    setTimeout(()=>{
        formContainer.style.transform='rotateX(0deg)'
    },1000) 
}


//Send Form

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('hNzYRHHyITIU20oc_');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function() {  
                // div for say thanks
                const thanksUser = document.querySelector('.thanks-user')
                console.log(thanksUser)
                thanksUser.style.display='flex'
                setTimeout(()=>{
                    thanksUser.style.display='none'
                },1500) 

            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
        
// on click btn
const btnForm = document.getElementById('btnForm')
const arrowBtn = document.getElementById('arrowBtn')
btnForm.addEventListener('click',()=>{
arrowBtn.style.transform='translateX(30px)'
arrowBtn.style.transition='all .7s ease'
setTimeout(()=>{
    arrowBtn.style.transform='translateX(0px)'
},300)


})

// onFocus

const formInp = document.querySelectorAll('#formInp')
const formLabel = document.querySelectorAll('#formLabel')


formInp.forEach((item)=>{
item.addEventListener('focus',()=>{
    // formLabel.style.color='#FFFFFF'
    item.style.borderBottom = '1px solid #FFFFFF';
})
})


