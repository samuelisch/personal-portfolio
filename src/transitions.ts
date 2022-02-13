function animateHero() {
  console.log('running')
  const firstLine = document.querySelector('.hero-one');
  const secondLine = document.querySelector('.hero-two');
  const viewButton = document.querySelector('.view-button');
  firstLine?.classList.add('animate-hero');
  secondLine?.classList.add('animate-hero');
  viewButton?.classList.add('animate-button');
  console.log('added');
}

window.onload = function () {
  animateHero();
}