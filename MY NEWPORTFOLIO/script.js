// NAVBAR TOGGLE 
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// TYPED.JS EFFECT
const typed = new Typed(".text", {
  strings: ["Web Developer", "Frontend Developer", "Java Beginner", "Problem Solver"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// === EMAILJS CONTACT FORM ===
emailjs.init("8gMVWRBRTT27wORi8"); // Replace with your EmailJS public key

const contactForm = document.getElementById("contactForm");
const feedbackForm = document.getElementById("feedbackForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_debpp6j", "template_ms801as ", contactForm)
      .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again.");
      });
  });
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_debpp6j", "template_feedback", feedbackForm)
      .then(() => {
        alert("✅ Feedback submitted!");
        feedbackForm.reset();
      })
      .catch(() => {
        alert("❌ Failed to submit feedback.");
      });
  });
}

// === SCROLL TO TOP BUTTON ===
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
