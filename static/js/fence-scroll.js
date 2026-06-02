(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) {
    return;
  }

  const root = document.documentElement;
  let ticking = false;

  const updateFence = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const wave = Math.sin(window.scrollY / 42);
    const bob = Math.cos(window.scrollY / 58);

    root.style.setProperty("--scroll-progress", progress.toFixed(3));
    root.style.setProperty("--fence-wave", wave.toFixed(3));
    root.style.setProperty("--fence-bob", bob.toFixed(3));
    root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateFence);
      ticking = true;
    }
  };

  updateFence();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
})();
