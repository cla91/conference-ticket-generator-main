import updateTicketPreview from "./updateTicketPreview";

const genereteTicketForm = document.forms[0];

export default function formSubmitHandler() {
  genereteTicketForm.reset();
  genereteTicketForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(genereteTicketForm);
    updateTicketPreview(formData);
  });
}
