// Bloemen animatie
document.addEventListener('DOMContentLoaded', () => {
  const bigFlower = document.querySelector('.big-flower') as HTMLElement;
  const smallFlower = document.querySelector('.small-flower') as HTMLElement;

  // Grote bloem
  if (bigFlower) {
    let time = 0;
    const animateBig = () => {
      time += 0.008;
      const floatY = Math.sin(time * 0.3) * 20;
      const floatRotate = Math.sin(time * 0.15) * 4;
      bigFlower.style.transform = `translateY(calc(-50% + ${floatY}px)) rotate(${floatRotate}deg)`;
      requestAnimationFrame(animateBig);
    };
    animateBig();
  }

  // Kleine bloem
  if (smallFlower) {
    let time = 0;
    const animateSmall = () => {
      time += 0.01;
      const floatY = Math.sin(time * 0.5) * 8;
      const floatRotate = Math.sin(time * 0.25) * 5;
      smallFlower.style.transform = `translateY(${floatY}px) rotate(${floatRotate}deg)`;
      requestAnimationFrame(animateSmall);
    };
    animateSmall();
  }
});