/**
 * accordion.ts — Enhanced accordion behavior with smooth height animation
 *
 * Targets elements with [data-accordion-item] (details elements).
 * Provides smooth open/close animation using scrollHeight for the content area.
 *
 * This enhances the native details/summary behavior with animated height transitions.
 * Works alongside the Accordion.astro shared component.
 */

function initAccordions() {
  const items = document.querySelectorAll<HTMLDetailsElement>(
    '[data-accordion-item]'
  );
  if (!items.length) return;

  items.forEach((details) => {
    const summary = details.querySelector('summary');
    const body = details.querySelector<HTMLElement>('.accordion-body');
    if (!summary || !body) return;

    // Track animation state
    let animation: Animation | null = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener('click', (e) => {
      e.preventDefault();

      // Add overflow hidden during animation
      details.style.overflow = 'hidden';

      if (isClosing || !details.open) {
        open();
      } else if (isExpanding || details.open) {
        shrink();
      }
    });

    function shrink() {
      isClosing = true;

      const startHeight = `${details.offsetHeight}px`;
      const endHeight = `${summary!.offsetHeight}px`;

      if (animation) {
        animation.cancel();
      }

      animation = details.animate(
        { height: [startHeight, endHeight] },
        {
          duration: 300,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }
      );

      animation.onfinish = () => onAnimationFinish(false);
      animation.oncancel = () => (isClosing = false);
    }

    function open() {
      // Set height before opening to animate from
      details.style.height = `${details.offsetHeight}px`;
      details.open = true;

      // Wait for next frame so the browser can calculate the new height
      window.requestAnimationFrame(() => expand());
    }

    function expand() {
      isExpanding = true;

      const startHeight = `${details.offsetHeight}px`;
      const endHeight = `${summary!.offsetHeight + body!.offsetHeight}px`;

      if (animation) {
        animation.cancel();
      }

      animation = details.animate(
        { height: [startHeight, endHeight] },
        {
          duration: 300,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }
      );

      animation.onfinish = () => onAnimationFinish(true);
      animation.oncancel = () => (isExpanding = false);
    }

    function onAnimationFinish(open: boolean) {
      details.open = open;
      animation = null;
      isClosing = false;
      isExpanding = false;

      // Clear inline styles
      details.style.height = '';
      details.style.overflow = '';
    }
  });
}

// Initialize on first load
initAccordions();

// Re-initialize after Astro view transitions
document.addEventListener('astro:after-swap', initAccordions);
