document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".background-text");
    const project1 = document.querySelector(".project-card:first-child"); // First project
    const project2 = document.querySelector(".project-card:last-child"); // Second project

    // Zoom-in effect for text
    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "scale(1)";
    }, 500);

    // Mouse movement tracking for full-page shift
    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 30; 
        const y = (event.clientY / window.innerHeight - 0.5) * 30;
        document.body.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Project reveal interaction
    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (mouseX < 0.4) {
            // Move left → First project appears
            project1.style.opacity = "1";
            project1.style.transform = "scale(1) translateX(0)";
            project2.style.opacity = "0";
            project2.style.transform = "scale(0.8) translateX(100px)";
        } else if (mouseX > 0.6) {
            // Move right → Second project appears
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
