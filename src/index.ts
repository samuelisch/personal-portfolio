import "./sass/main.scss";

const hoverTexts = document.querySelectorAll('.hover');

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

hoverTexts.forEach(text => text.addEventListener('mouseover', showImg));
hoverTexts.forEach(text => text.addEventListener('mouseout', hideImg));