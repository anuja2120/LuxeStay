// Menu button toggle functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// Room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// News container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Booking form submission handling
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "availability-message");
  document.querySelector(".booking__container").appendChild(messageDiv);

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const arrivalDate = document.getElementById("arrival").value;
    const departureDate = document.getElementById("departure").value;
    const guests = document.getElementById("guests").value;

    // Here you would typically make an AJAX request to the server to check room availability
    // For the purpose of this example, we'll simulate this with a setTimeout and random availability

    setTimeout(() => {
      const isAvailable = Math.random() > 0.5; // Randomly decide if rooms are available

      if (isAvailable) {
        displayMessage("Welcome! Rooms are available", "success");
      } else {
        displayMessage("Sorry, no rooms are available for your selected dates.", "error");
      }
    }, 1000);
  });

  function displayMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type === "success" ? "success-message" : "error-message";
  }
});

