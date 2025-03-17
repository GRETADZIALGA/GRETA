document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const project1 = document.querySelector(".project-card:first-child");
    const project2 = document.querySelector(".project-card:last-child");

    homepage.style.display = "flex"; // Ensure homepage is visible

    // Initially hide projects
    project1.classList.remove("active");
    project2.classList.remove("active");

    document.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX / window.innerWidth;

        if (mouseX < 0.4) {
            project1.classList.add("active");
            project2.classList.remove("active");
        } else if (mouseX > 0.6) {
            project2.classList.add("active");
            project1.classList.remove("active");
        } else {
            project1.classList.remove("active");
            project2.classList.remove("active");
        }
    });
});
