document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    function revealProjects() {
        let scrollY = window.scrollY;

        projects.forEach((project, index) => {
            let delay = index * 0.4; // Delays each project slightly
            let projectOffset = project.offsetTop - window.innerHeight * 0.8; // Change trigger point

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = "translateX(0) translateY(0)";
                project.style.transitionDelay = `${delay}s`;
            }
        });
    }

    document.addEventListener("scroll", revealProjects);

    // Run once on page load to show any visible projects
    revealProjects();
});
