document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach((project, index) => {
        gsap.set(project, { x: "-120vw", opacity: 1 }); // Start far left

        gsap.to(project, {
            x: "120vw", // Move fully across the screen
            opacity: 1, // Keep fully visible
            duration: 6, // Slow it down to 6 seconds
            delay: index * 2, // Stagger effect so they don’t all move at once
            ease: "power2.out",
            repeat: -1, // Loop animation forever
            onRepeat: () => {
                gsap.set(project, { x: "-120vw" }); // Reset to left after it disappears
            }
        });
    });
});
