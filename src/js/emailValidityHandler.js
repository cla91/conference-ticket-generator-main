const emailInput = document.querySelector("#email");
const errorMessage = emailInput.nextElementSibling;

const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function emailValidityHandler() {
  emailInput.addEventListener("blur", () => {
    if (!validEmailRegex.test(emailInput.value)) {
      errorMessage.classList.remove("hidden");
      emailInput.classList.add("border-orange-500");
    }
  });
  emailInput.addEventListener("input", () => {
    if (validEmailRegex.test(emailInput.value)) {
      errorMessage.classList.add("hidden");
      emailInput.classList.remove("border-orange-500");
    }
  });
}
