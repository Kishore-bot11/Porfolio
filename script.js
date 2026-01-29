
const track = document.getElementById("strapTrack");
const strap = document.querySelector(".strap");

let position = 0;
let speed = 4;
let targetSpeed = speed;

function animate() {
  position -= speed;

  const trackWidth = track.scrollWidth / 2;
  if (Math.abs(position) >= trackWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;

  speed += (targetSpeed - speed) * 0.08;

  requestAnimationFrame(animate);
}

strap.addEventListener("mouseenter", () => {
  targetSpeed = 0.6;
});

strap.addEventListener("mouseleave", () => {
  targetSpeed = 4;
});

animate();

window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    el.style.animationPlayState = "running";
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // adjust for navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
const navbar = document.querySelector('.NavBar');
const homeSection = document.querySelector('#Home');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Check if scrolled past home section
  if (scrollY > homeSection.offsetHeight - navbar.offsetHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---------- WORK / CTA / ABOUT ----------
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".workcontent, .cta, .aboutcontent")
  .forEach(el => sectionObserver.observe(el));


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".projectcard");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`; // SCROLL delay
    observer.observe(card);
  });
});

window.addEventListener("scroll", () => {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.7) {
    timeline.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".step, .connector");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
  });
});


  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Optional: close menu on scroll
  window.addEventListener("scroll", () => {
    mobileMenu.classList.remove("active");
  });





