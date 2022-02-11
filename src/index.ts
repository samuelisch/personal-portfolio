import "./sass/main.scss";

const hoverTexts = document.querySelectorAll('.hover');
const project = document.querySelectorAll('.project');
const sections = document.querySelectorAll('section[id]');

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
    const sectionTop = currentSection.offsetTop - 250;
    const sectionId = current.getAttribute('id');

    //compare
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      (<Element>document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.add('current');
    } else {
      (<Element>document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.remove('current');
    }
  })
}

//listen for scroll
window.addEventListener('scroll', navHighlighter);
hoverTexts.forEach(text => text.addEventListener('mouseover', showImg));
hoverTexts.forEach(text => text.addEventListener('mouseout', hideImg));
project.forEach(project => project.addEventListener('mouseenter', hideGif));
project.forEach(project => project.addEventListener('mouseleave', showGif));