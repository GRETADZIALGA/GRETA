document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    document.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;

        projects.forEach((project, index) => {
            let delay = index * 500; // Staggered effect per project
            let projectOffset = windowHeight * (index + 1) * 0.6; // Controls when they appear

            setTimeout(() => {
                if (scrollY > projectOffset) {
                    project.style.opacity = "1";
                    project.style.transition = "transform 2s ease-out, opacity 2s ease-out"; // **Smoother, Slower Animation**
                    project.style.transform = `translateX(${(index % 2 === 0 ? "" : "-")}100vw)`; // Moves across screen
                } else {
                    project.style.opacity = "0";
                    project.style.transition = "transform 2s ease-out, opacity 2s ease-out"; // **Slower Exit**
                    project.style.transform = `translateX(${(index % 2 === 0 ? "-100vw" : "100vw")})`; // Moves back
                }
            }, delay); // Adds a small delay for each project
        });
    });
});
