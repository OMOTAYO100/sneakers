
//this is for the hamburger//


const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".hero-section");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// image avatar dropdown//


const avatar = document.getElementById("avatar");
const profileDropdown = document.getElementById("profileDropdown");

avatar.addEventListener("click", () => {
  profileDropdown.classList.toggle("hidden");
});



// Select elements
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

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    const newSrc = thumbnail.getAttribute("data-full");
    mainImage.src = newSrc;
  });
});
