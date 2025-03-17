document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");

    // Ensure the homepage stays hidden until it's supposed to appear
    homepage.style.display = "none";

    setTimeout(() => {
        homepage.style.display = "flex"; // Show homepage after a small delay
    }, 500); // Delay just to ensure everything loads properly

    // Smooth Mouse movement tracking for full-page shift
    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 30; 
        const y = (event.clientY / window.innerHeight - 0.5) * 30;
        document.body.style.transform = `translate(${x}px, ${y}px)`;
    });
});
