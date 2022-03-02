/* MOBILE MENU */

const navbar = document.querySelector('.menu-nav');
const openbtn = document.querySelector('.hamburger-menu');
const closebtn = document.querySelector('.close-menu');
const toggleBtn = document.querySelector('.menu');
const logo = document.querySelector('.menu-icon');
const lists = document.querySelector('.nav-mobile');
const navMobileList = document.querySelectorAll('.nav-mobile-list');
function toggler() {
  closebtn.classList.toggle('close-menu-active');
  openbtn.classList.toggle('close-menu');
  navbar.classList.toggle('mobile-menu');
  logo.classList.toggle('close-menu');
  lists.classList.toggle('nav-mobile-active');
}
toggleBtn.addEventListener('click', toggler);
navMobileList.forEach((elem) => {
  elem.addEventListener('click', toggler);
})

/* POPUP CARDS */

const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: "images/Snapshoot desktop.png",
    technologies: ["Ruby on rails", "css", "javascript", "html"],
    live: "https://aminabuhari.github.io/Portfolio-Project-.io/",
    source: "https://github.com/AminaBuhari/Portfolio-Project-.io",
  },
]



window.onload = () => {
  const newContainer = document.getElementById("class");
  projects.forEach((project) => {
    const cardsHTML = `<div class="container-3">
      <div class="container-4" id="${project.id}">
        <div class="container-5">
          <h4 class="header-3">${project.name}</h4>
        </div>
        <div>
          <ul class="button-1">
          ${project.technologies.map((technology) => `<li class="list"><button class="button-1h">${technology}</button></li>`).join('')}
          </ul>
        </div>
        <div class="buttons-2">
          <button class="button-2h" type="button" onclick="showPopup(${project.id})">See Project</button>
        </div>
      </div>
      `;
    newContainer.insertAdjacentHTML('beforeend', cardsHTML)
  })
};

function showPopup(projectId) {
  const bodyElement = document.querySelector("body")
  const project = projects.find((pop)=>pop.id === projectId)
  const popupHTML = ` <section id="desk-popup">
  <div id="desktop-popup">
     <div> <img src="images/Disabled.png" alt="Disabled" class="pop-close" onclick = "closePopup()" /></div>
      <div class="pop-image-wrapper">
          <img src="${project.featured_image}" alt="snapshoot" class="project-image" />
      </div>

      <div class="pop-heading">
          <h4 class="paragraph-pop">${project.name}</h4>
          <div class="pop-button">
              <a href="${project.live}" target = "_blank"><button class="button-3h">
                  See Live<img src="images/light.png" alt="live-icon" />
              </button></a>
              <a href="${project.source}" target = "_blank"><button class="button-3h">
                  See Source
                  <img src="images/live.png" alt="git-hub icon" />
              </button></a>
          </div>
      </div>
       <ul class="button-pop">
              <li class="list">
                  <button class="button-4h">Ruby on Rails</button>
              </li>
              <li class="list"><button class="button-4h">css</button></li>
              <li class="list">
                  <button class="button-4h">Javascript</button>
              </li>
      </ul>
      <p class="paragraph-2 pop-paragraph">
              ${project.description}
      </p>
  </div>
</section>`
  bodyElement.insertAdjacentHTML('afterbegin', popupHTML);
}

function closePopup() {
  const unpopElement = document.getElementById("desk-popup");
  unpopElement.parentNode.removeChild(unpopElement);
}