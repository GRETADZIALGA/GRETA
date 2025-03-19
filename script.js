document.addEventListener("DOMContentLoaded", function () {
    // GRETA Alternating Directions
    const textRows = document.querySelectorAll(".text-row");
    textRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.classList.add("left");
        } else {
            row.classList.add("right");
        }
    });

    // Project Scroll Animation (One at a Time, Slower)
    const projectCards = document.querySelectorAll(".project-card");
    let delay = 0;
    projectCards.forEach((card, index) => {
        gsap.fromTo(card, 
            { x: "-100vw", opacity: 0 }, 
            { x: "100vw", opacity: 1, duration: 3, delay: delay, ease: "power1.inOut",
                onComplete: () => gsap.to(card, { x: "200vw", opacity: 0, duration: 3, ease: "power1.inOut" }) 
            }
        );
        delay += 3; // This makes sure they appear one at a time
    });
});
