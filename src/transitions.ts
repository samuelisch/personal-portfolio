function animateHero() {
  const firstLine = document.querySelector('.hero-one');
  const secondLine = document.querySelector('.hero-two');
  const viewButton = document.querySelector('.view-button');
  firstLine?.classList.add('animate-hero');
  secondLine?.classList.add('animate-hero');
  viewButton?.classList.add('animate-button');
  
}


document.addEventListener('readystatechange', event => {
  const target:any = event.target;
  if (target.readyState === 'interactive') {
    animateHero();
  }
});