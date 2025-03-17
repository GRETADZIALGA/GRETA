document.addEventListener("DOMContentLoaded", () => {
    const backgroundText = document.querySelector(".background-text");

    // Make the GRETA text move when you scroll
    document.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        backgroundText.style.transform = `translateY(${scrollY * 0.3}px)`;
    });

    // Make project cards clickable
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", () => {
            let link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
