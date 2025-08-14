const bearContainer = document.getElementById("bear-container");

// Six different bear images
const bearImages = [
    "image/angry.png",
    "image/bear1.png",
    "image/bear3.png",
    "image/bear4.png",
    "image/bear5.png",
    "image/bear6.png",
    "image/bear7.png",
    "image/bear8.png",
    "image/bear9.png",
    "image/bear10.png"
];

// Helper to get a random number in a range
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Create one bear for each image
bearImages.forEach(src => {
    let bear = document.createElement("img");
    bear.src = src;
    bear.classList.add("bear");

    // Random starting position
    bear.style.top = random(0, window.innerHeight - 60) + "px";
    bear.style.left = random(0, window.innerWidth - 60) + "px";

    // Random velocity for slow floating
    bear.dataset.vx = random(-0.3, 0.3);
    bear.dataset.vy = random(-0.3, 0.3);

    bearContainer.appendChild(bear);
});

// Animation loop
function animateBears() {
    document.querySelectorAll(".bear").forEach(bear => {
        let x = parseFloat(bear.style.left);
        let y = parseFloat(bear.style.top);
        let vx = parseFloat(bear.dataset.vx);
        let vy = parseFloat(bear.dataset.vy);

        x += vx;
        y += vy;

        // Wrap around screen edges
        if (x < -60) x = window.innerWidth;
        if (x > window.innerWidth) x = -60;
        if (y < -60) y = window.innerHeight;
        if (y > window.innerHeight) y = -60;

        bear.style.left = x + "px";
        bear.style.top = y + "px";
    });

    requestAnimationFrame(animateBears);
}

animateBears();
