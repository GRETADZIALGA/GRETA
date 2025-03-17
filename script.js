document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const project1 = document.querySelector(".project-card:first-child");
    const project2 = document.querySelector(".project-card:last-child");

    homepage.style.display = "flex"; // Make sure homepage is always visible

    // Set initial project visibility
    project1.style.opacity = "0";
    project2.style.opacity = "0";

    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (mouseX < 0.4) {
            project1.style.opacity = "1";
            project1.style.transform = "scale(1) translateX(0)";
            project2.style.opacity = "0.2"; // Keep other project slightly visible
            project2.style.transform = "scale(0.8) translateX(100px)";
        } else if (mouseX > 0.6) {
            project2.style.opacity = "1";
            project2.style.transform = "scale(1) translateX(0)";
            project1.style.opacity = "0.2";
            project1.style.transform = "scale(0.8) translateX(-100px)";
        } else {
            project1.style.opacity = "0.2"; 
            project1.style.transform = "scale(0.8) translateX(-150px)";
            project2.style.opacity = "0.2";
            project2.style.transform = "scale(0.8) translateX(150px)";
        }
    });
});
