// function toggleMenu() {
//   const menu = document.getElementById("mobileMenu");
//   menu.classList.toggle("-translate-x-full");
// }

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const isMenuOpen = mobileMenu.classList.contains("-translate-x-full");

  if (isMenuOpen) {
    mobileMenu.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  }
}
