body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #000;
}

canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}

// Touch
starsContainer.addEventListener("touchstart", startDrag);
window.addEventListener("touchmove", drag);
window.addEventListener("touchend", endDrag);
