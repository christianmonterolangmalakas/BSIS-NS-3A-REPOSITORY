// Smooth scrolling to sections
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a, .menu-links a");
  const arrowIcon = document.querySelector(".arrow");

  // Add click event listeners to navigation links
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust the offset as needed
          behavior: "smooth",
        });
      }
    });
  });

  // Add click event listener to arrow icon
  if (arrowIcon) {
    arrowIcon.addEventListener("click", function () {
      const targetId = this.getAttribute("onclick").split("'")[1];
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust the offset as needed
          behavior: "smooth",
        });
      }
    });
  }
});

// Hover effects for project cards
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Animations or transitions for elements (Example: Navbar background color change on scroll)
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
