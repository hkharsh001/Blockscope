// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show a welcome message after a delay
window.onload = function() {
  setTimeout(function() {
    alert('Welcome to Block Scope! Start testing your ad blocker now.');
  }, 3000); // Show after 3 seconds
};

// Displayed once the page is scrolled to a specific section
window.onscroll = function() {
  var featuresSection = document.getElementById("features");
  var rect = featuresSection.getBoundingClientRect();
  
  if (rect.top <= window.innerHeight) {
    featuresSection.classList.add("visible");
  }
};

// Adding visibility effect for features section
document.addEventListener('DOMContentLoaded', function () {
  const featuresSection = document.getElementById("features");
  featuresSection.classList.add("hidden"); // Start as hidden
});
