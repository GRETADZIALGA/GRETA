document.addEventListener("DOMContentLoaded", () => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = `
        <div class="loading-text">LOADING...</div>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    `;
    document.body.appendChild(loader);

    let progress = 0;
    const progressFill = document.querySelector(".progress-fill");
    const loadingText = document.querySelector(".loading-text");

    const interval = setInterval(() => {
        progress += 5;
        progressFill.style.width = progress + "%";
        loadingText.innerText = `LOADING... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            loader.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(loader);
            }, 500);
        }
    }, 100);
});
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".background-text");
    const project1 = document.querySelector(".project-card.black"); // Left book
    const project2 = document.querySelector(".project-card.white"); // Right book

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
