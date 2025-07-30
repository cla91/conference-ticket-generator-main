import createPreviewElements from "./createPreviewElements"; //create markup of the preview after upload
import resetPreviewMarkup from "./resetPreviewMarkup"; //reset markup to initial state

const uploadAvatarInput = document.querySelector("#upload-avatar");
const uploadPreviewDiv = document.querySelector("[data-upload-preview]");
const fileInputHelpText = document.querySelector("#file-input-help"); // Il p con la didascalia di aiuto

// upload event handler
export default function setupFileUpload() {
  //listener on the file input
  uploadAvatarInput.addEventListener("change", (e) => {
    const choosenFile = e.target.files[0];
    handleFilePreview(choosenFile);
  });

  // remove and change button event listener
  uploadPreviewDiv.addEventListener("click", (e) => {
    if (
      uploadPreviewDiv.querySelector("[data-uploaded-avatar-img]") &&
      e.target.matches("[data-remove-btn]") &&
      e.target.matches("[data-change-btn]")
    ) {
      e.preventDefault();
    }
    if (e.target.matches("[data-remove-btn]")) {
      //remove file
      uploadAvatarInput.value = "";
      handleFilePreview(null);
      //return the focus in the input
      uploadAvatarInput.focus();
    } else if (e.target.matches("[data-change-btn]")) {
      uploadAvatarInput.click();
    }
  });
}

// handle file preview
export function handleFilePreview(file) {
  //if not, reset preview and delete eventual error message
  if (!file) {
    uploadPreviewDiv.innerHTML = resetPreviewMarkup();

    fileInputHelpText.classList.remove("text-orange-500");
    fileInputHelpText
      .querySelector("img")
      .classList.remove("error-info-icon-filter");
    fileInputHelpText.querySelector(
      "span"
    ).innerHTML = `Upload your photo (JPG or PNG, max size: 500KB).`;
    return;
  }

  // validate the file size and format
  const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes
  const allowedTypes = ["image/jpeg", "image/png"];

  if (!allowedTypes.includes(file.type)) {
    //not right type
    uploadPreviewDiv.innerHTML = resetPreviewMarkup();
    uploadAvatarInput.value = "";
    //add error messege
    fileInputHelpText.classList.add("text-orange-500");
    fileInputHelpText
      .querySelector("img")
      .classList.add("error-info-icon-filter");
    fileInputHelpText.querySelector(
      "span"
    ).innerHTML = `Please upload a JPG or PNG image.`;
    return;
  }
  //if file zise too big
  if (file.size > MAX_FILE_SIZE) {
    uploadPreviewDiv.innerHTML = resetPreviewMarkup();
    uploadAvatarInput.value = "";
    //add error message
    fileInputHelpText.classList.add("text-orange-500");
    fileInputHelpText
      .querySelector("img")
      .classList.add("error-info-icon-filter");
    fileInputHelpText.querySelector(
      "span"
    ).innerHTML = `File too large. Please upload a photo under 500KB.`;
    return;
  }

  // if file OK
  uploadPreviewDiv.innerHTML = createPreviewElements();

  const choosenImg = uploadPreviewDiv.querySelector(
    "[data-uploaded-avatar-img]"
  );

  const reader = new FileReader();
  reader.onload = () => {
    choosenImg.src = reader.result;
    //reset message
    fileInputHelpText.classList.remove("text-orange-500");
    fileInputHelpText
      .querySelector("img")
      .classList.remove("error-info-icon-filter");
    fileInputHelpText.querySelector(
      "span"
    ).innerHTML = `Upload your photo (JPG or PNG, max size: 500KB).`;
  };
  reader.readAsDataURL(file);
}
