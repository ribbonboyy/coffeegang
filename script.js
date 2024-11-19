const canvas = document.getElementById("pixel-canvas");
const colorPicker = document.getElementById("color");

const gridSize = 64; // Grid size: 64x64
const pixelStatesKey = "pixelCanvasState"; // Key for localStorage

// Load saved canvas state (if exists)
const savedState = JSON.parse(localStorage.getItem(pixelStatesKey)) || [];

// Function to create the grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // Restore saved color (if exists)
        pixel.style.backgroundColor = savedState[i] || "#fff";

        // Add click listener to change color
        pixel.addEventListener("click", () => {
            const color = colorPicker.value;
            pixel.style.backgroundColor = color;

            // Save the updated color to the state
            savedState[i] = color;
            saveCanvasState();
        });

        canvas.appendChild(pixel);
    }
}

// Save the canvas state to localStorage
function saveCanvasState() {
    localStorage.setItem(pixelStatesKey, JSON.stringify(savedState));
}

// Initialize the grid
createGrid();
