// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all the card elements
    var cards = document.querySelectorAll(".card");
  
    // Add event listeners for mouseenter and mouseleave events
    cards.forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        gsap.to(this, { rotationX: 5, rotationY: 5 });
      });
  
      card.addEventListener("mouseleave", function () {
        gsap.to(this, { rotationX: 0, rotationY: 0 });
      });
    });
  });
  