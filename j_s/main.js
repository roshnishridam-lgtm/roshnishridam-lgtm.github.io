// ============================================================
// HANGENDE BLOEMEN - TYPESCRIPT ANIMATIE
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. BLOEMEN ZWEVEN
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach((flower, index) => {
    const el = flower as HTMLElement;
    let time = index * 0.5;
    const speed = 0.6 + index * 0.1;
    const amplitude = 6 + index * 2;

    const animateFlower = () => {
      time += 0.015;
      const floatY = Math.sin(time * speed) * amplitude;
      const floatRotate = Math.sin(time * speed * 0.6) * 5;
      el.style.transform = `translateY(${floatY}px) rotate(${floatRotate}deg)`;
      requestAnimationFrame(animateFlower);
    };
    animateFlower();
  });

  // 2. TAKKEN ZWA AIEN (extra beweging)
  const vines = document.querySelectorAll('.vine-1, .vine-2, .vine-3');
  vines.forEach((vine, index) => {
    const el = vine as HTMLElement;
    let time = index * 0.3;

    const animateVine = () => {
      time += 0.008;
      const sway = Math.sin(time * 0.4 + index) * 2.5;
      el.style.transform = `rotate(${sway}deg)`;
      requestAnimationFrame(animateVine);
    };
    animateVine();
  });
});