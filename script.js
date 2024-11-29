document.addEventListener("DOMContentLoaded", () => {
  // Select all sections to animate
  const sections = document.querySelectorAll("section");

  // Intersection Observer options
  const options = {
    root: null, // Uses the viewport as the root
    rootMargin: "0px",
    threshold: 0.5 // Triggers animation when 50% of section is visible
  };

  // Intersection Observer callback function
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when section is in view
        entry.target.classList.add("in-view");
      } else {
        // Remove animation class when section is out of view
        entry.target.classList.remove("in-view");
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(observerCallback, options);

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});
// Add sound playback for all elements with the 'data-sound' attribute
document.querySelectorAll('[data-sound]').forEach(element => {
  element.addEventListener('click', () => {
    const soundSrc = element.getAttribute('data-sound');
    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.play();
    }
  });
});
