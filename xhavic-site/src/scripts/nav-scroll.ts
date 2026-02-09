/**
 * nav-scroll.ts
 * ---
 * Navbar transparency → solid on scroll.
 * Adds 'is-scrolled' class to .navbar when user scrolls past 80px.
 */

function initNavScroll(): void {
  const navbar = document.querySelector('.navbar') as HTMLElement | null;
  if (!navbar) return;

  let ticking = false;

  function onScroll(): void {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 80) {
          navbar!.classList.add('is-scrolled');
        } else {
          navbar!.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // Run once on load
  onScroll();
}

initNavScroll();
document.addEventListener('astro:after-swap', initNavScroll);
