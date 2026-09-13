const header = document.getElementById("header");
window.addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 15),
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuLinks = document.querySelectorAll(
  ".desktop-header nav a, .mobile-bottom-nav a",
);
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;

        menuLinks.forEach((link) => {
          link.classList.remove("active");
        });

        menuLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    root: null,
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

const toast = document.getElementById("toast");
document.querySelector(".light-btn")?.addEventListener("click", () => {
  toast.textContent = "Opening your email app…";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
});
