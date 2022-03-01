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

const popup= [
    {
    header: 'Multi-Post Stories Gain+Glory',
    languages: ["Ruby on rails", "css", "javascript","Html"],
    live: ["https://aminabuhari.github.io/Portfolio-Project-.io/"],
    source: ["https://github.com/AminaBuhari/Portfolio-Project-.io"],
}

];

const newContainer = document.getElementsByClassName("first-class");
newContainer.innerHTML = `
<div class="container-3">
<div class="container-4">
  <div class="container-5">
    <h4 class="header-3">Multi-Post Stories Gain+Glory</h4>
  </div>
  <div>
    <ul class="button-1">
      <li class="list">
        <button class="button-1h">Ruby on rails</button>
      </li>
      <li class="list">
        <button class="button-1h">css</button>
      </li>
      <li class="list">
        <button class="button-1h">Javascript</button>
      </li>
      <li class="list">
        <button class="button-1h">html</button>
      </li>
    </ul>
  </div>
  <div class="buttons-2">
    <button class="button-2h">See Project</button>
  </div>
</div>

`;