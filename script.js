gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.project').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
        }
    });
});
