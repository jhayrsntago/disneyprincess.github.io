const bearContainer = document.getElementById("bear-container");
const numBears = 15;
const bearImage = "image/bear4.png"; // Replace with your bear PNG path

function random(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < numBears; i++) {
    let bear = document.createElement("img");
    bear.src = bearImage;
    bear.classList.add("bear");

    bear.style.top = random(0, window.innerHeight) + "px";
    bear.style.left = random(0, window.innerWidth) + "px";

    bear.dataset.vx = random(-0.2, 0.2); // slow horizontal movement
    bear.dataset.vy = random(-0.2, 0.2); // slow vertical movement

    bearContainer.appendChild(bear);
}

function animateBears() {
    document.querySelectorAll(".bear").forEach(bear => {
        let x = parseFloat(bear.style.left);
        let y = parseFloat(bear.style.top);
        let vx = parseFloat(bear.dataset.vx);
        let vy = parseFloat(bear.dataset.vy);

        x += vx;
        y += vy;

        // Wrap around screen
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
