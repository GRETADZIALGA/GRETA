document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const projectCards = document.querySelectorAll(".project-card");

    homepage.style.display = "flex"; // Ensure homepage is visible

    // Scroll-based project reveal
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY / window.innerHeight;

        projectCards.forEach((card, index) => {
            let revealPoint = 0.5 + index * 0.2; // Adjust reveal timing
            if (scrollPosition > revealPoint) {
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            } else {
                card.style.opacity = "0.2";
                card.style.transform = "scale(0.8)";
            }
        });
    });
});
