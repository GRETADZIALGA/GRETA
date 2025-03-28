document.addEventListener("DOMContentLoaded", function () {
  // Alternate GRETA text row animation direction
  const textRows = document.querySelectorAll(".text-row");
  textRows.forEach((row, index) => {
    row.classList.add(index % 2 === 0 ? "left" : "right");
  });
gsap.registerPlugin(ScrollTrigger);

const projects = gsap.utils.toArray('.project');

projects.forEach((project, index) => {
  gsap.fromTo(project,
    {
      x: '100vw',
      rotationY: -45, // Start with a rotated perspective
      opacity: 0
    },
    {
      x: '0vw',
      rotationY: 0,
      opacity: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: project,
        start: 'center center',
        end: '+=200', // Adjust based on content height
        scrub: true,
        markers: true // Remove or set to false in production
      }
    }
  );
});

  // Scroll-triggered animations for project cards
  gsap.registerPlugin(ScrollTrigger);

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        x: index % 2 === 0 ? "-100vw" : "100vw",
        opacity: 0,
      },
      {
        x: "0vw",
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
