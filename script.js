// Function linked to the hamburg menu (when screen is < 1200px)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open"); //toggle function with open class linked 
  icon.classList.toggle("open");
}
