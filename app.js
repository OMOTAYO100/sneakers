//this is for the hamburger//
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".hero-section");
hamburger.setAttribute("aria-expanded", "false");

const avatar = document.getElementById("avatar");
const profileDropdown = document.getElementById("profileDropdown");

hamburger.addEventListener("click", () => {
  const isActive = navLinks.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isActive.toString());

  if (!profileDropdown.classList.contains("hidden")) {
    profileDropdown.classList.add("hidden");
  }
});
avatar.addEventListener("click", () => {
  profileDropdown.classList.toggle("hidden");

  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

// Function to increase count
increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Function to decrease count
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const newSrc = thumbnail.getAttribute("data-full");
    mainImage.src = newSrc;
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideAvatar = avatar.contains(e.target);
  const clickedInsideDropdown = profileDropdown.contains(e.target);
  const clickedInsideHamburger = hamburger.contains(e.target);
  const clickedInsideNavLinks = navLinks.contains(e.target);

  // Close profile dropdown if click is outside avatar or dropdown
  if (!clickedInsideAvatar && !clickedInsideDropdown) {
    profileDropdown.classList.add("hidden");
  }

  // Close nav links if click is outside hamburger or nav links
  if (!clickedInsideHamburger && !clickedInsideNavLinks) {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});
