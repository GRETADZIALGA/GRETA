document.addEventListener("DOMContentLoaded", function () {
    // GRETA Alternating Directions
    const textRows = document.querySelectorAll(".text-row");
    textRows.forEach((row, index) => {
        row.classList.add(index % 2 === 0 ? "left" : "right");
    });

    // Project Scroll Animation (One at a Time, Slower)
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
        const delay = index * 6; // 3s enter + 3s exit = 6s per card

        gsap.fromTo(card,
            { x: "-100vw", opacity: 0 },
            {
                x: "0",
                opacity: 1,
                duration: 3,
                delay: delay,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.to(card, {
                        x: "100vw",
                        opacity: 0,
                        duration: 3,
                        ease: "power1.inOut",
                        delay: 0.5 // Small delay before exit
                    });
                }
            }
        );
    });
});
