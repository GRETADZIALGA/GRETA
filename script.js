document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    document.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        projects.forEach((project, index) => {
            let projectOffset = window.innerHeight * (index + 1) * 0.8; // Staggered effect

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = `translateX(${window.innerWidth}px)`;
            } else {
                project.style.opacity = "0";
                project.style.transform = `translateX(-100%)`;
            }
        });
    });
});
