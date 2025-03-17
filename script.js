document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    // Function to check when elements enter the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    // Observe each project card
    projectCards.forEach((card) => observer.observe(card));

    // Make project cards clickable
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", () => {
            let link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
