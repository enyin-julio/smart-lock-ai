const header = document.querySelector("[data-header]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 40);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button[type='submit']");
    const original = button.textContent;

    button.textContent = "需求已送出";
    button.disabled = true;

    if (formStatus) {
      formStatus.textContent = "感謝你的聯絡，我們會盡快安排產品顧問回覆。";
    }

    window.setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
      contactForm.reset();

      if (formStatus) {
        formStatus.textContent = "";
      }
    }, 2600);
  });
}
