document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    function revealProjects() {
        let scrollY = window.scrollY;

        projects.forEach((project, index) => {
            let delay = index * 0.3; // More random delay
            let projectOffset = project.offsetTop - window.innerHeight * 0.7;

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = "translateX(0) translateY(0)";
                project.style.transitionDelay = `${delay}s`;
            }
        });
    }

    document.addEventListener("scroll", revealProjects);
});
