document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelector(".project-track");

    // Horizontal Scroll Effect
    document.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
            projects.scrollLeft += e.deltaY * 0.5;
            e.preventDefault();
        }
    });
});
