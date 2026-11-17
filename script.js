const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const envelope = document.getElementById("openLetter");
const finalLetter = document.getElementById("finalLetter");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  window.setTimeout(() => finalLetter.classList.add("show"), 450);
});
