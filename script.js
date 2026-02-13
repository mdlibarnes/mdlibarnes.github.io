// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

navToggle?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
  mobileNav.setAttribute("aria-hidden", String(isOpen));
});

// Close mobile nav on click
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.style.display = "none";
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

// Reveal animations (timeline + cards)
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));
