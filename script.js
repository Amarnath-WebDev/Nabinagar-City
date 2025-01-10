// Wait for the DOM to fully load before running animations
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animations
    gsap.from(".hero-title", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power4.out",
    });
  
    gsap.from(".cta-button", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  
    gsap.from(".hero-image img", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power4.out",
    });
  
    // Section Title Animation (Triggered on scroll)
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  
    // Gallery Cards Animation (Triggered on scroll)
    gsap.from(".card", {
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  
    // Contact Form Animation (Triggered on scroll)
    gsap.from("#contact-form", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  
    // Footer Animation
    gsap.from("footer p", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  });
  