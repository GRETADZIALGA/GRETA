document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const project1 = document.querySelector(".project-card:first-child");
    const project2 = document.querySelector(".project-card:last-child");

    // Ensure homepage is hidden at first
    homepage.style.display = "none";

    setTimeout(() => {
        homepage.style.display = "flex"; // Reveal homepage after a short delay
    }, 500);

    // Mouse interaction to show/hide projects smoothly
    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (mouseX < 0.4) {
            project1.style.opacity = "1";
            project1.style.transform = "scale(1) translateX(0)";
        } else if (mouseX > 0.6) {
            project2.style.opacity = "1";
            project2.style.transform = "scale(1) translateX(0)";
        } else {
            project1.style.opacity = "0.5"; /* Instead of fully hiding, make them slightly visible */
            project1.style.transform = "scale(0.8) translateX(-100px)";
            project2.style.opacity = "0.5";
            project2.style.transform = "scale(0.8) translateX(100px)";
        }
    });
});
