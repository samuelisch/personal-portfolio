import "./sass/main.scss";
import service from './service';
import notifications from './notification';
import './transitions';

const hoverTexts = document.querySelectorAll('.hover');
const project = document.querySelectorAll('.project');
const sections = document.querySelectorAll('section[id]');
const form:any = document.querySelector('.contact-form');
const textarea:any = document.getElementsByClassName("input-message");

for (let i = 0; i < textarea.length; i++) {
  textarea[i].setAttribute("style", "height:" + (textarea[i].scrollHeight) + "px;overflow-y:hidden;");
  textarea[i].addEventListener("input", () => OnInput(textarea[i]));
}

function OnInput(textarea: HTMLTextAreaElement) {
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
}

function showImg(e: Event) {
  const target:any = e.target;
  if (target) {
    const img:any = (target.parentNode).querySelector('.interest-img');
    img.style.display = 'inline';
  }
}

function hideImg(e: Event) {
  const target:any = e.target;
  if (target) {
    const img:any = (target.parentNode).querySelector('.interest-img');
    img.style.display = 'none';
  }
}

function showGif(e: Event) {
  const target:any = e.target;
  const gifElement:any = target.querySelector('.project-gif')
  if (gifElement) {
    gifElement.style.visibility = 'visible';
    gifElement.style.opacity = '100%';
  }
}

function hideGif(e: Event) {
  const target:any = e.target;
  const gifElement:any = target.querySelector('.project-gif')
  if (gifElement) {
    gifElement.style.visibility = 'hidden';
    gifElement.style.opacity = '0%';
  }
}

//highlighting nav element when content is shown
function navHighlighter() {
  //current scroll pos
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const currentSection:any = (<Element>current)
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 500;
    const sectionId = current.getAttribute('id');

    //compare
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      (<Element>document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.add('current');
    } else {
      (<Element>document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.remove('current');
    }
  })
}

async function handleFormSubmit(e: Event) {
  e.preventDefault();
  const target = e.target;
  const button:any = document.querySelector('.form-button');
  if (target) {
    try{
      button.disabled = true;
      const name:any = document.querySelector('.input-name');
      const email:any = document.querySelector('.input-email');
      const message:any = document.querySelector('.input-message');
      if (name && email && message) {
        const content = { 
          name: name.value, 
          email: email.value, 
          message: message.value
        };
        await service.post(content);
        form.reset();
        notifications.displaySuccess();
        button.disabled = false;
      }
    } catch (error) {
      notifications.displayError()
      button.disabled = false;
    }
  }
}

//listen for scroll
window.addEventListener('scroll', navHighlighter);
hoverTexts.forEach(text => text.addEventListener('mouseover', showImg));
hoverTexts.forEach(text => text.addEventListener('mouseout', hideImg));
project.forEach(project => project.addEventListener('mouseenter', hideGif));
project.forEach(project => project.addEventListener('mouseleave', showGif));
form?.addEventListener('submit', handleFormSubmit);