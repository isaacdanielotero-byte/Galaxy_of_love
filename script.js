const starsContainer = document.getElementById("stars");

function createStar() {
    const star = document.createElement("div");
    const size = Math.random() * 3 + 1;

    star.classList.add("star");
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 2 + 1) + "s";

    starsContainer.appendChild(star);
}

for (let i = 0; i < 200; i++) {
    createStar();
}


// === Movimiento de la cámara ===
let isDragging = false;
let startX, startY;
let offsetX = 0, offsetY = 0;

function startDrag(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    offsetX += (x - startX);
    offsetY += (y - startY);

    startX = x;
    startY = y;

    starsContainer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function endDrag() {
    isDragging = false;
}

// Mouse
starsContainer.addEventListener("mousedown", startDrag);
window.addEventListener("mousemove", drag);
window.addEventListener("mouseup", endDrag);

// Touch
starsContainer.addEventListener("touchstart", startDrag);
window.addEventListener("touchmove", drag);
window.addEventListener("touchend", endDrag);
