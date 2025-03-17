document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    // Reveal projects as they scroll in
    function revealProjects() {
        let scrollY = window.scrollY;

        projectCards.forEach((project, index) => {
            let delay = index * 0.4;
            let projectOffset = project.offsetTop - window.innerHeight * 0.7;

            if (scrollY > projectOffset) {
                project.style.opacity = "1";
                project.style.transform = "translateX(0) translateY(0)";
                project.style.transitionDelay = `${delay}s`;
            }
        });
    }

    document.addEventListener("scroll", revealProjects);

    // Flip effect on click
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});
