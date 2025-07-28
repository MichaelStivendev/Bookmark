const body = document.body;
const form = document.querySelector("#myForm");
const input = document.querySelector("#email");
const emailError = document.querySelector(".error-message");
const iconError = document.querySelector(".error-icon");
const btnMenu = document.querySelector("#openMenu")
const closeMenu = document.querySelector("#closeMenu")
const menu = document.querySelector(".menu-hamburger")
const openMenu = document.querySelector("#openMenu")
const nav = document.querySelector('nav');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.feature-slider');


let scrollY = 0; 

tabs.forEach(tab =>{
  tab.addEventListener("click",()=>{
    const tabNumber = tab.dataset.tab;

    tabs.forEach(t=> t.classList.remove("active"));
    contents.forEach(c=>c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(`tab-${tabNumber}`).classList.add("active");
  })
})




btnMenu.addEventListener('click',()=>{
  menu.classList.add("open");
  closeMenu.classList.add("CloseMenu")
  openMenu.style.display = "none"
  nav.classList.add('menu-open');
   disableScroll(true); 
})
closeMenu.addEventListener("click",()=>{
  menu.classList.remove('open');
  closeMenu.classList.remove("CloseMenu");
  openMenu.style.display = "block"
  nav.classList.remove('menu-open');
  disableScroll(false);
})

function disableScroll(shouldDisable) {
  if (shouldDisable) {
    scrollY = window.scrollY;
    body.style.top = `-${scrollY}px`; 
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
    body.style.top = ''; 
    window.scrollTo(0, scrollY); 
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
   validatedEmail(email)
});   

input.addEventListener("input",(e)=>{
    hideError();
})
function validatedEmail(email) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    showError(`Whoops, make sure it's an email`)
  } else {
    if (regex.test(email)) {
      hideError();
    } else {
      showError(`Whoops, make sure it's an email`)
    }
  }
}
function showError(message){
   input.classList.add("error-email");
      emailError.textContent = message;
      emailError.style.visibility = "visible";
      iconError.style.visibility ="visible"
}
function  hideError() {
    input.classList.remove("error-email");
      emailError.style.visibility = "hidden";
      iconError.style.visibility ="hidden"

}