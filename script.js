document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let direction = scrollTop > lastScrollTop ? 1 : -1; // 1 for scrolling down, -1 for scrolling up
        lastScrollTop = scrollTop;

        projects.forEach((project, index) => {
            let delay = index * 0.5; // Staggered effect
            let moveDistance = direction === 1 ? "110vw" : "-110vw"; // Move fully across

            gsap.to(project, {
                x: moveDistance,
                opacity: direction === 1 ? 1 : 0,
                duration: 2, // Slowed down to 2 seconds
                delay: delay,
                ease: "power2.out",
                onComplete: () => {
                    if (direction === 1) {
                        project.style.transform = "translateX(-110vw)";
                    } else {
                        project.style.transform = "translateX(110vw)";
                    }
                }
            });
        });
    });
});
