let currentIndex = localStorage.getItem("currentIndex") || document.currentScript.getAttribute('currentIndex');
currentIndex = currentIndex;
const images = ["cover1.webp", "cover2.webp", "cover3.webp"];
const colorSets = [
  {
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#9B5856",
    "--accent-color": "#28725A",
    "--accent-color-2": "#D2C7CB",
    "--background-color": "#15191d",
  },
  {
    "--text-color": "#c0caf5",
    "--hover-color": "#e0af68",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#bb9af7",
    "--background-color": "#1a1b26",
  },
];

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  localStorage.setItem("currentIndex", currentIndex); // Update currentIndex in localStorage
  const imageElement = document.getElementById("carouselImage");
  imageElement.style.opacity = 0;
  updateColors(currentIndex);

  setTimeout(() => {
    imageElement.src = "../src/images/" + images[currentIndex];
    imageElement.style.opacity = 1;
  }, 200); // Adjust the timeout to match the transition duration
}

// Preload images after the page has loaded
window.onload = function () {
	document.getElementById("image").classList.add('loaded');
  document.getElementById("text").classList.add('loaded');

  // Call updateColors with the initial index first
  updateColors(currentIndex);

  // Set the initial image after updating colors
  document.getElementById("carouselImage").src = "../src/images/" + images[currentIndex];

  // Preload the remaining images
  preloadImages();
};


function updateColors() {
  const colorSet = colorSets[currentIndex];
  for (const [property, value] of Object.entries(colorSet)) {
    document.documentElement.style.setProperty(property, value);
  }
}

// Call updateColors with the initial index
updateColors(currentIndex);

