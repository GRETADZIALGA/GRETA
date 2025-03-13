document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".background-text");
    const project1 = document.querySelector(".project-card.black"); // Left book
    const project2 = document.querySelector(".project-card.white"); // Right book

    // Zoom-in effect for text
    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "scale(1)";
    }, 500);

    // Mouse movement tracking
    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (mouseX < 0.4) {
            // Move left → Left book (Project 1) appears
            project1.style.opacity = "1";
            project1.style.transform = "scale(1) translateX(0)";
            project2.style.opacity = "0";
            project2.style.transform = "scale(0.8) translateX(100px)";
        } else if (mouseX > 0.6) {
            // Move right → Right book (Project 2) appears
            project2.style.opacity = "1";
            project2.style.transform = "scale(1) translateX(0)";
            project1.style.opacity = "0";
            project1.style.transform = "scale(0.8) translateX(-100px)";
        } else {
            // Center → Hide both
            project1.style.opacity = "0";
            project1.style.transform = "scale(0.8) translateX(-100px)";
            project2.style.opacity = "0";
            project2.style.transform = "scale(0.8) translateX(100px)";
        }
    });
});
