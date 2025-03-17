document.addEventListener("DOMContentLoaded", () => {
    // Create loading screen elements
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = `
        <div class="loading-text">WELCOME TO MY PROFILE...</div>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <div class="loading-status">//SYSTEM LOADING 0%</div>
    `;
    document.body.appendChild(loader);

    let progress = 0;
    const progressFill = document.querySelector(".progress-fill");
    const loadingText = document.querySelector(".loading-status");

    // Progress bar animation
    const interval = setInterval(() => {
        progress += 5;
        progressFill.style.width = progress + "%";
        loadingText.innerText = `//SYSTEM LOADING ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 250); // Adjusted timing to complete in 5 seconds (20 steps)

    // After 5 seconds, show the button
    setTimeout(() => {
        const enterButton = document.createElement("button");
        enterButton.innerText = "CLICK TO ENTER";
        enterButton.classList.add("enter-button");
        document.body.appendChild(enterButton);

        // Hide loading elements
        loader.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);

        // When the button is clicked, go to the GRETA page
        enterButton.addEventListener("click", () => {
            window.location.href = "index.html"; // Change to your homepage URL
        });
    }, 5000); // Show button after 5 seconds
});


    // Main page animation after loading
    setTimeout(() => {
        const text = document.querySelector(".background-text");
        const project1 = document.querySelector(".project-card.black");
        const project2 = document.querySelector(".project-card.white");

        if (text) {
            text.style.opacity = "1";
            text.style.transform = "scale(1)";
        }

        // Mouse movement tracking for full-page shift
        document.addEventListener("mousemove", (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 30;
            const y = (event.clientY / window.innerHeight - 0.5) * 30;
            document.body.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Project reveal interaction
        document.addEventListener("mousemove", (event) => {
            let mouseX = event.clientX / window.innerWidth;

            if (project1 && project2) {
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
    }, 1500); // Ensure animations start only after the loading screen disappears
});
