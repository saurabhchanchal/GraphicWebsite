//--------------------------------------------------------------------->
console.log("Hello")

// Add active class to the current button (highlight it)
var navbarItems = document.querySelectorAll('.navbar a');
for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//------------------ slide image--------------------------------------->

const images = document.querySelectorAll('.slider img');
let currentImgIndex = 0;
images[currentImgIndex].classList.add('active');

function nextImage() {
  images[currentImgIndex].classList.remove('active');
  currentImgIndex = (currentImgIndex + 1) % images.length;
  images[currentImgIndex].classList.add('active');
}

setInterval(nextImage, 3000); // Change image every 3 seconds (adjust this value as needed)



//----------------------for tab Section---------------------------------->

// Get all the tab buttons and content divs
var tabButtons = document.getElementsByClassName("tablinks");
var tabContents = document.getElementsByClassName("tabcontent");

// Loop through all the tab buttons
for (var i = 0; i < tabButtons.length; i++) {
  // Add click event listener to each button
  tabButtons[i].addEventListener("click", function() {
    // Remove the "active" class from all buttons
    for (var j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
    }
    // Add the "active" class to the clicked button
    this.classList.add("active");

    // Hide all tab contents
    for (var k = 0; k < tabContents.length; k++) {
      tabContents[k].style.display = "none";
    }

    // Show the corresponding tab content
var tabId = this.getAttribute("onclick").split("'")[1];
document.getElementById(tabId).style.display = "block";
});
}

// Set the first tab as active and show its content
tabButtons[0].classList.add("active");
tabContents[0].style.display = "block";

// ----------------------------------------------------------------->

console.log("Hello")









