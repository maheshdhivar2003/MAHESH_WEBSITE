// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// Close mobile menu on link click
document.querySelectorAll(".m-link").forEach(a => {
  a.addEventListener("click", () => mobileNav.classList.remove("open"));
});

// Reveal on scroll
const revealItems = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      // Animate skill bars when skills section visible
      if (e.target.closest("#skills")) {
        document.querySelectorAll(".fill").forEach(f => {
          f.style.width = getComputedStyle(f).getPropertyValue("--w");
        });
      }
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => io.observe(el));

// Back to top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 450) toTop.classList.add("show");
  else toTop.classList.remove("show");
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Contact form (UI)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent (UI only). Backend Node.js जोडायचा असेल तर सांग ✅");
  e.target.reset();
}); 