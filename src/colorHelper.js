// Image and colour changing for website
// This uses function applyColors to apply colours to a different ids and classes on the site
// localStorage is used to retain these changes across reloads

// Define applyColors function
function applyColors(counter, colors) {
  
  // Set up constants for some of the items we want to edit
  const body = document.body;
  const date = document.querySelector("#date");
  const anchors = document.querySelectorAll('a');
  const aElements = document.querySelectorAll("url-list a");
  const listItems = document.querySelectorAll("url-list li:first-child");

  // Change body colors
  body.style.color = colors[counter].color;
  body.style.background = colors[counter].background;
  date.style.color = colors[counter].hlcol;

  // Change link colors for all 'a' elements
  anchors.forEach(anchor => {
    anchor.style.color = colors[counter].linkcol;
  });

  // Change link colors and add hover events for 'a' elements within 'url-list' elements
  aElements.forEach(a => {
    a.style.color = colors[counter].linkcol;
    // Checks when link is hovered
    a.addEventListener("mouseenter", function() {
      // Sets to hover color when hovered
      this.style.color = colors[counter].hovercol;
    });    
    // Checks when mouse is not hovering
    a.addEventListener("mouseleave", function() {
      // Sets back to original color.
      this.style.color = colors[counter].linkcol;
    });
  });

  // Change first child color of each 'url-list' element (aka every heading)
  listItems.forEach(item => {
    item.style.color = colors[counter].hlcol;
  });
}

// Sets up constants for our image changing portion
const imageDiv = document.getElementById("imageDiv");
const image = document.getElementById("image");
// Sets paths for image carousel
const imageFiles = ["../src/images/image1.jpg", "../src/images/image2.jpg", "../src/images/image3.jpg"];

// Define color arrays for each image
const colors = [
  // Create array of color variables for each 'theme'
  { color: "#bb9af7", background: "#1a1b26", hlcol: "#7aa2f7", linkcol: "#CDD6F4", hovercol: "#e0af68" }, // colors for image 1
  { color: "#D2C7CB", background: "#15191d", hlcol: "#28725A", linkcol: "#9fadc6", hovercol: "#e0af68" }, // colors for image 2
  { color: "#bb9af7", background: "#1a1b26", hlcol: "#7aa2f7", linkcol: "#717189", hovercol: "#CDD6F4" }, // colors for image 3
];

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

