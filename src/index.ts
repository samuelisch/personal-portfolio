import "./sass/main.scss";
import Concerto from './images/concerto.png';
import Cycle from './images/cycle.png';
import Formula from './images/formula.png';

const hoverTexts = document.querySelectorAll('.hover');

const concertoElement = document.querySelector('.concerto');
const concertoImage = new Image();
concertoImage.className = 'concerto-img interest-img';
concertoImage.src = Concerto;
concertoElement?.appendChild(concertoImage);

const cycleElement = document.querySelector('.cycle');
const cycleImage = new Image();
cycleImage.className = 'cycle-img interest-img';
cycleImage.src = Cycle;
cycleElement?.appendChild(cycleImage);

const formulaElement = document.querySelector('.formula');
const formulaImage = new Image();
formulaImage.className = 'formula-img interest-img';
formulaImage.src = Formula;
formulaElement?.appendChild(formulaImage);

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