const navbar = document.querySelector('.menu-nav');
const openbtn = document.querySelector('.hamburger-menu');
const closebtn = document.querySelector('.close-menu');
const toggleBtn = document.querySelector('.menu');
const logo = document.querySelector('.menu-icon');
const lists = document.querySelector('.nav-mobile');
const navMobileList = document.querySelectorAll('.nav-mobile-list');
function toggler(){
    closebtn.classList.toggle('close-menu-active');
    openbtn.classList.toggle('close-menu');
    navbar.classList.toggle('mobile-menu');
    logo.classList.toggle('close-menu');
    lists.classList.toggle('nav-mobile-active');
}
toggleBtn.addEventListener('click', toggler);
navMobileList.forEach((elem)=>{
    elem.addEventListener('click', toggler);
})


