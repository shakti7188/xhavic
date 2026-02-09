/**
 * reveal.ts — Enhanced scroll-reveal with stagger support
 *
 * Observes elements with [data-reveal] and [data-reveal-stagger].
 * Adds `is-visible` class when element is ~15% visible.
 * Stagger: children animate in with CSS transition-delay (see components.css).
 *
 * Usage:
 *   <div data-reveal>           — basic fade up + scale
 *   <div data-reveal-stagger>   — children animate in with stagger delay
 */

function initReveal() {
  const elements = document.querySelectorAll<HTMLElement>(
    '[data-reveal], [data-reveal-stagger]'
  );
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

initReveal();
document.addEventListener('astro:after-swap', initReveal);
