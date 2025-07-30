const ticketFullName = document.querySelector("[data-ticket-full-name]");
const ticketGitUsername = document.querySelector("[data-ticket-gitUsername]");
const ticketNumber = document.querySelector("[data-ticket-number]");
const ticketArticle = document.querySelector("[data-ticket-article]");
const ticketEmail = document.querySelector("[data-ticket-email]");
const ticketAvatar = document.querySelector("[data-ticket-avatar]");
const formArticle = document.querySelector("[data-form-article]");
const firstName = document.querySelector("[data-ticket-firstName]");
const lastName = document.querySelector("[data-ticket-lastName]");

export default function updateTicketPreview(formData) {
  ticketFullName.innerHTML = formData.get("fullName");
  ticketGitUsername.innerHTML = formData.get("gitUsername");
  ticketEmail.innerHTML = formData.get("email");
  ticketAvatar.setAttribute(
    "src",
    document.querySelector("[data-uploaded-avatar-img]").src
  );
  const fullNameArray = formData.get("fullName").split(" ");
  firstName.innerHTML = fullNameArray.shift();
  lastName.innerHTML = fullNameArray.join(" ") + "!";
  ticketNumber.innerHTML = genereteTicketNumber();
  formArticle.classList.add("hidden");
  ticketArticle.classList.remove("hidden");
}

function genereteTicketNumber() {
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charArray = [...char];
  let ticketNumber = "#";
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * charArray.length);
    ticketNumber += charArray[randomNumber];
  }
  return ticketNumber;
}
