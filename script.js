document.addEventListener("DOMContentLoaded", () => {
    const project1 = document.querySelector(".project-card:first-child");
    const project2 = document.querySelector(".project-card:last-child");

    let isHovered = false; // Track if the user is hovering over a project

    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (!isHovered) { // Only hide/show when NOT hovering
            if (mouseX < 0.4) {
                project1.style.opacity = "1";
                project1.style.transform = "scale(1) translateX(0)";
                project2.style.opacity = "0";
                project2.style.transform = "scale(0.8) translateX(100px)";
            } else if (mouseX > 0.6) {
                project2.style.opacity = "1";
                project2.style.transform = "scale(1) translateX(0)";
                project1.style.opacity = "0";
                project1.style.transform = "scale(0.8) translateX(-100px)";
            } else {
                project1.style.opacity = "0";
                project1.style.transform = "scale(0.8) translateX(-100px)";
                project2.style.opacity = "0";
                project2.style.transform = "scale(0.8) translateX(100px)";
            }
        }
    });

    // Keep projects visible when hovering
    project1.addEventListener("mouseenter", () => {
        isHovered = true;
    });
    project1.addEventListener("mouseleave", () => {
        isHovered = false;
    });

    project2.addEventListener("mouseenter", () => {
        isHovered = true;
    });
    project2.addEventListener("mouseleave", () => {
        isHovered = false;
    });
});
