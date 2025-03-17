document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    let ticking = false; 

    function handleScroll() {
        let scrollY = window.scrollY;

        projects.forEach((project) => {
            let projectOffset = project.offsetTop - window.innerHeight / 1.5;

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = "scale(1)";
            } else {
                project.style.opacity = "0.3";
                project.style.transform = "scale(0.8)";
            }
        });

        ticking = false; 
    }

    document.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
});
