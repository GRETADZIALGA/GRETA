document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach((project, index) => {
        gsap.set(project, { x: "-120vw", opacity: 1 }); // Start far left

        gsap.to(project, {
            x: "120vw", // Move fully across the screen
            opacity: 1, // Keep visible
            duration: 12, // SUPER SLOW (12 seconds)
            delay: index * 6, // Makes them move **one at a time** (6 sec delay between each)
            ease: "power2.out",
            onComplete: () => {
                gsap.set(project, { x: "-120vw" }); // Reset to left after disappearing
            },
            repeat: -1 // Keeps looping so they always come in smoothly
        });
    });
});

