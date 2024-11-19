// Create a 32x32 grid dynamically
const canvas = document.getElementById("pixel-canvas");
const colorPicker = document.getElementById("color");

for (let i = 0; i < 32 * 32; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = colorPicker.value;
    });
    canvas.appendChild(pixel);
}
