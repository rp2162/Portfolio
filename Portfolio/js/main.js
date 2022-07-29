let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick =() => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
};

window.onscroll =()=>{
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}

// review Swiper

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   email js

function validate(){
    let name =document.querySelector('.name')
    let email =document.querySelector('.email')
    let msg =document.querySelector('.message')
    let sendBtn =document.querySelector('.send-btn')
    sendBtn.addEventListener('click',(e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_lmrea2k","template_o3xz137",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}
function emptyerror(){
    swal({
        title: "Oh no...",
        text: "Fields cannot be EMPTY",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email Sent Successfully",
        text: "You will get reply within 24 hours.",
        icon: "success",
      });
}

// header background change when scroll

let header = document.querySelector('header');
window.addEventListener('scroll',() =>{
    header.classList.toggle('header-active', window.scrollY > 0);
} );

// scroll top
let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll',() =>{
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
} );