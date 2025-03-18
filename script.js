document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const projects = document.querySelectorAll(".project-card");

    projects.forEach((project, index) => {
        let randomY = Math.random() * 300 - 150; // Random height variation
        let startX = window.innerWidth * 1.2; // Start off-screen right
        let endX = -window.innerWidth * 0.2; // End off-screen left

        gsap.set(project, { x: startX, y: randomY });

        gsap.to(project, {
            x: endX,
            opacity: 1,
            scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "top top",
                scrub: true, // Moves smoothly as you scroll
            }
        });
    });
});
