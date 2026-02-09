/**
 * counter.ts
 * ---
 * Animated number counter for stats/metrics.
 * Uses IntersectionObserver + requestAnimationFrame.
 * Elements with [data-count-to] animate from 0 → target value on scroll.
 *
 * Usage:
 *   <span data-count-to="2000" data-count-suffix="+">0</span>
 *   <span data-count-to="0.04" data-count-prefix="$">0</span>
 */

function animateCounter(el: HTMLElement): void {
  const target = parseFloat(el.dataset.countTo || '0');
  const prefix = el.dataset.countPrefix || '';
  const suffix = el.dataset.countSuffix || '';
  const decimals = (el.dataset.countTo || '').includes('.')
    ? (el.dataset.countTo || '').split('.')[1].length
    : 0;
  const duration = parseInt(el.dataset.countDuration || '1800', 10);
  const start = performance.now();

  function easeOutQuint(t: number): number {
    return 1 - Math.pow(1 - t, 5);
  }

  function update(now: number): void {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuint(progress);
    const current = target * eased;

    el.textContent = prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!counters.length) return;

  // Skip animations if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach((el) => {
      const prefix = el.dataset.countPrefix || '';
      const suffix = el.dataset.countSuffix || '';
      el.textContent = prefix + (el.dataset.countTo || '0') + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => observer.observe(el));
}

initCounters();
document.addEventListener('astro:after-swap', initCounters);
