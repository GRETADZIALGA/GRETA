* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
    color: #ff0033;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    height: 300vh; /* Longer scroll effect */
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Background Text */
.background-text {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: -1;
    pointer-events: none;
}

.text-row {
    display: flex;
    white-space: nowrap;
    font-size: 15vw; /* Huge GRETA */
    font-weight: bold;
    text-transform: uppercase;
    color: #ff0033;
    text-shadow: 5px 5px 0px black;
    letter-spacing: 10px; /* Creates 1cm space */
}

/* Slower Background Animation */
.left {
    animation: moveLeft 20s linear infinite;
}
.right {
    animation: moveRight 20s linear infinite;
}

@keyframes moveLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); } /* Super slow */
}

@keyframes moveRight {
    0% { transform: translateX(0); }
    100% { transform: translateX(20%); } /* Super slow */
}

/* Projects Scroll In from Right */
.projects {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px; /* More space between projects */
    padding-top: 200vh; /* Longer scroll experience */
}

/* Make each project appear at different vertical heights */
.project-card:nth-child(1) { transform: translateX(120vw) translateY(-50px); }
.project-card:nth-child(2) { transform: translateX(140vw) translateY(80px); }
.project-card:nth-child(3) { transform: translateX(110vw) translateY(-100px); }
.project-card:nth-child(4) { transform: translateX(130vw) translateY(60px); }

.project-card {
    width: 400px;
    height: 600px;
    opacity: 0;
    transition: transform 1.5s ease-out, opacity 1.5s ease-out;
    border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
}
