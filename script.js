document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    document.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        projects.forEach((project, index) => {
            let projectOffset = project.offsetTop - window.innerHeight / 1.5;

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = "scale(1)";
            } else {
                project.style.opacity = "0.3";
                project.style.transform = "scale(0.8)";
            }
        });
    });
});
