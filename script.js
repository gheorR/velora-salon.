// PERSONALIZEAZĂ aceste setări pentru fiecare client.
const SITE_CONFIG = {
  businessName: "VELORA",
  // Numărul WhatsApp în format internațional, fără + sau spații.
  whatsappNumber: "37367389744"
};

document.querySelectorAll("[data-business]").forEach(el => {
  el.textContent = SITE_CONFIG.businessName;
});
document.title = `${SITE_CONFIG.businessName} — Beauty & Grooming Studio`;
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// Reveal-on-scroll, cu fallback pentru browsere fără IntersectionObserver.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

const dateInput = document.getElementById("date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("service").value = link.dataset.service;
  });
});

const form = document.getElementById("booking-form");
const statusBox = document.getElementById("form-status");
form.addEventListener("submit", event => {
  event.preventDefault();
  statusBox.classList.remove("error");

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const appointment = Object.fromEntries(formData.entries());
  const message = [
    `Bună! Doresc să solicit o programare la ${SITE_CONFIG.businessName}.`,
    "",
    `Nume: ${appointment.name}`,
    `Telefon: ${appointment.phone}`,
    `Serviciu: ${appointment.service}`,
    `Data preferată: ${appointment.date}`,
    `Ora preferată: ${appointment.time}`,
    appointment.message ? `Detalii suplimentare: ${appointment.message}` : ""
  ].filter(Boolean).join("\n");

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  statusBox.textContent = "Se deschide WhatsApp cu detaliile programării. Apasă Trimite în WhatsApp pentru a expedia cererea.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
