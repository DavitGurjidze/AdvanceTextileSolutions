// home.js

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle dropdown menu visibility and animate hamburger
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");
    });
  
    // Auto-close dropdown when a link is clicked
    document.querySelectorAll("#nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
      });
    });
  });
  