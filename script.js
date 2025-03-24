document.addEventListener("DOMContentLoaded", function () {
  // Alternate GRETA text row animation direction
  const textRows = document.querySelectorAll(".text-row");
  textRows.forEach((row, index) => {
    row.classList.add(index % 2 === 0 ? "left" : "right");
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
