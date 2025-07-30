import { handleFilePreview } from "./fileUploadHandler";

const uploadPreviewDiv = document.querySelector("[data-upload-preview]");
const uploadAvatarInput = document.querySelector("#upload-avatar");

export default function dragDropHanler() {
  uploadPreviewDiv.addEventListener("dragenter", dragenter, false);
  uploadPreviewDiv.addEventListener("dragover", dragover, false);
  uploadPreviewDiv.addEventListener("drop", drop, false);

  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;
    uploadAvatarInput.files = files;
    handleFilePreview(files[0]);
  }
}
