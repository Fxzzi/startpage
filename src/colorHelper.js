// Image and colour changing for website
// This uses function applyColors to apply colours to a different ids and classes on the site
// localStorage is used to retain these changes across reloads

// Sets up variables for our image changing portion
// 1st one grabs the image div, second grabs the image itself
const imageDiv = document.getElementById("imageDiv");
const image = document.getElementById("image");
const mainBody = document.getElementById("mainBody")

// Sets paths for image carousel
const imageFiles = ["../src/images/image1.jpg", "../src/images/image2.jpg", "../src/images/image3.jpg"];

// Set color variables for hex codes we use more than once
const tokyoNightPurple = "#bb9af7";
const tokyoNightBackground = "#1a1b26"
const tokyoNightBlue = "#7aa2f7"
const tokyoNightForeground = "#CDD6F4"
const tokyoNightYellow = "#E0AF68"

// Define color arrays for each image
const colors = [
  { color: tokyoNightYellow, background: tokyoNightBackground, hlcol: tokyoNightBlue, linkcol: "#A8B8CF", hovercol: tokyoNightPurple }, // colors for image 1
  { color: "#D2C7CB", background: "#15191d", hlcol: "#28725A", linkcol: "#9fadc6", hovercol: "#9B5856" }, // colors for image 2
  { color: tokyoNightPurple, background: tokyoNightBackground, hlcol: tokyoNightBlue, linkcol: tokyoNightForeground, hovercol: tokyoNightYellow },  // colors for image 3
];

// Define a function to preload the images
function preloadImages() {
  // Loop through the array of image files
  for (let i = 0; i < imageFiles.length; i++) {
    // Create a new Image object for each image file
    const img = new Image();
    // Set the source attribute of the Image object to the image file path
    img.src = imageFiles[i];
  }
}

// Define applyColors function to change color properties depending on the counter
function applyColors(counter, colors) {
  document.documentElement.style.setProperty('--primary-color', colors[counter].linkcol);
  document.documentElement.style.setProperty('--secondary-color', colors[counter].color);
  document.documentElement.style.setProperty('--accent-color', colors[counter].hlcol);
  document.documentElement.style.setProperty('--link-accent-color', colors[counter].hovercol);
  document.documentElement.style.setProperty('--bg-color', colors[counter].background);
}

// Call the preloadImages function to start loading the images
// preloadImages();

// Changes the image to the one linked to our counter
image.src = imageFiles[counter];

// Apply localStorage colors on page load
applyColors(counter, colors);

// Listens for clicks on the image
imageDiv.addEventListener("click", function() {
  // Add a class to the image element
  image.classList.add("fade-out");

  // Wait for the transition to complete
  setTimeout(() => {
    // Remove the class from the image element
    image.classList.remove("fade-out");

    // Change the image source
    counter = (counter + 1) % imageFiles.length;
    localStorage.setItem("counter", counter);
    image.src = imageFiles[counter];

    // Apply colors
    applyColors(counter, colors);
     // 200 sets time of 0.2s for transition
  }, 200);
});
