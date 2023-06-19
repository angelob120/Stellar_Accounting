// Function to handle the scroll event and show/hide the back-to-top button
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Show the back-to-top button when scrolled down more than 20 pixels
      backToTopBtn.style.display = "block";
    } else {
      // Hide the back-to-top button when not scrolled enough
      backToTopBtn.style.display = "none";
    }
  }
  
  // Function to scroll smoothly to a specific section on the page
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the specified section with smooth behavior
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Function to scroll smoothly back to the top of the page
  function scrollToTop() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      // Use requestAnimationFrame for smooth animation effect
      window.requestAnimationFrame(scrollToTop);
      // Scroll the page to a position progressively closer to the top
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }
  