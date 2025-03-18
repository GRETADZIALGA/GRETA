document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let direction = scrollTop > lastScrollTop ? 1 : -1; // 1 = scrolling down, -1 = scrolling up
        lastScrollTop = scrollTop;

        projects.forEach((project, index) => {
            let delay = index * 1.5; // Longer stagger effect
            let moveDistance = direction === 1 ? "120vw" : "-120vw"; // Move fully across

            gsap.to(project, {
                x: moveDistance,
                opacity: direction === 1 ? 1 : 0,
                duration: 4, // Slowed down to 4 seconds
                delay: delay,
                ease: "power2.out",
                onComplete: () => {
                    if (direction === 1) {
                        project.style.transform = "translateX(-120vw)";
                    } else {
                        project.style.transform = "translateX(120vw)";
                    }
                }
            });
        });
    });
});
