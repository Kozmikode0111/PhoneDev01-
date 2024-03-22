// Function to toggle the hamburger menu
function toggle() {
  var menu = document.getElementById("hamburger");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Function to animate images
function animateImages() {
  var images = document.querySelectorAll(".project_img");
  images.forEach(function(img) {
    img.addEventListener("mouseover", function() {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", function() {
      img.style.transform = "scale(1)";
    });
  });
}

// Call the animateImages function when the page loads
window.onload = function() {
  animateImages();
}
