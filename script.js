document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const projects = document.querySelector(".projects");

    // Ensure the homepage and projects are hidden initially
    homepage.style.display = "none";
    projects.style.opacity = "0";

    setTimeout(() => {
        homepage.style.display = "flex"; // Show homepage after a short delay
        homepage.style.opacity = "1";

        // Fade in the projects smoothly
       setTimeout(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.style.opacity = "1"; 
        card.style.transform = "scale(1)";
    });
}, 800); // Slight delay after homepage appears

    // Smooth Mouse movement tracking for full-page shift
    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 30; 
        const y = (event.clientY / window.innerHeight - 0.5) * 30;
        document.body.style.transform = `translate(${x}px, ${y}px)`;
    });
});
