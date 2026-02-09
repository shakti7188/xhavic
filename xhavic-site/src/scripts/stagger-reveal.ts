/**
 * stagger-reveal.ts
 * ---
 * Enhanced scroll-reveal with stagger support.
 * Replaces basic reveal.ts with stagger and direction variants.
 *
 * Usage:
 *   <div data-reveal>             — basic fade up
 *   <div data-reveal-stagger>     — children animate in with stagger delay
 *   <div data-reveal data-reveal-direction="left">  — slide from left
 */

function initStaggerReveal(): void {
  // Skip all animations if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
    observer.observe(el);
  });
}

initStaggerReveal();
document.addEventListener('astro:after-swap', initStaggerReveal);
