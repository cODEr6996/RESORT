const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#enquiryForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#formMessage");
  message.textContent = "Thank you — this is a concept enquiry form for the Mist Wood Haven project.";
  event.target.reset();
});
