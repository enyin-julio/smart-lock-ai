const header = document.querySelector("[data-header]");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.textContent;
  button.textContent = "已送出需求";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
    event.currentTarget.reset();
  }, 2200);
});
