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
 // Function to set the appropriate video source
 function setVideoSource() {
  const videoElement = document.getElementById('hero-video');
  const videoSource = document.getElementById('videoSource');

  // Check screen width
  if (window.innerWidth <= 768) {
    // For mobile screens, set mobile video source
    videoSource.src = 'image/b2.mp4';
  } else {
    // For larger screens, set desktop video source
    videoSource.src = 'image/bg.mp4';
  }

  // Reload the video element to apply the new source
  videoElement.load();
}
  const bgVideo = document.querySelector('.bg-video');
  if (bgVideo) {
    bgVideo.playbackRate = 0.6; // 0.5 = half speed, 0.75 = slightly slow
  }
    const cursor = document.querySelector('.cursor-circle');

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  const btn = document.querySelector(".resume-btn");

  document.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;

    // Cursor distance from center
    const x = (e.clientX - innerWidth / 2) / 20;
    const y = (e.clientY - innerHeight / 2) / 20;

    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
    const aiBtn = document.getElementById("aiBtn");
  const aiChat = document.getElementById("aiChat");
  const closeAI = document.getElementById("closeAI");
  const aiBody = document.getElementById("aiBody");

  aiBtn.onclick = () => aiChat.style.display = "flex";
  closeAI.onclick = () => aiChat.style.display = "none";
    function sendAnswer(type) {
    let response = "";

    if (type === "experience") {
      response = "I have 2+ years of experience as a UI/UX, Graphic & Product Designer, crafting user-centered web, mobile, and brand experiences.";
    }

    if (type === "hire") {
  response = "I blend creativity with usability, communicate effectively with teams, and deliver designs that solve real problems while aligning with business goals.";
    }

    if (type === "skills") {
  response =
    "I specialize in creating user-centered, visually compelling, and scalable digital experiences by blending strategy, creativity, and usability.\n\n" +

    "Design & UX\n" +
    "#UIUXDesign #UserCenteredDesign #InteractionDesign #DesignThinking #Wireframing #Prototyping #UsabilityTesting #DesignSystems\n\n" +

    "Visual & Brand Design\n" +
    "#GraphicDesign #BrandIdentity #VisualDesign #Typography #ColorTheory #MarketingCreatives #SocialMediaDesign\n\n" +

    "Tools & Platforms\n" +
    "#Figma #AdobeXD #Photoshop #Illustrator #AfterEffects #Canva #Framer #Webflow\n\n" +

    "Product & Web\n" +
    "#ResponsiveDesign #WebDesign #MobileAppDesign #SaaSDesign #LandingPageDesign #PortfolioDesign\n\n" +

    "Collaboration & Growth\n" +
    "#CrossFunctionalCollaboration #ProblemSolving #CreativeThinking #ContinuousLearning #AgileWorkflow #TeamPlayer";
}


    if (type === "contact") {
      response = "You can reach me via email or LinkedIn. My resume is available for download on this website.";
    }

    // Create message bubble
    const msg = document.createElement("div");
    msg.className = "ai-msg bot typing";
    aiBody.appendChild(msg);

    let i = 0;
    const speed = 6; // typing speed (lower = faster)

    const typeEffect = setInterval(() => {
      msg.textContent = response.slice(0, i);
      i++;
      aiBody.scrollTop = aiBody.scrollHeight;

      if (i > response.length) {
        clearInterval(typeEffect);
        msg.classList.remove("typing");
      }
    }, speed);
  }
// Run the function on page load
setVideoSource();

// Optional: Add an event listener to handle screen resizing
window.addEventListener('resize', setVideoSource);
// Button Animation
