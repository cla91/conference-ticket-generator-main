export default function createPreviewElements() {
  return `
    <img data-uploaded-avatar-img src="" alt="Uploaded avatar" class="w-[3.125rem] h-[3.125rem] rounded-xl border border-neutral-500">
    <div class="flex gap-2">
      <button type="button" data-remove-btn class="cursor-pointer rounded-sm bg-white/10 px-2 py-1 text-xs underline">Remove image</button>
      <button type="button" data-change-btn class="cursor-pointer rounded-sm bg-white/10 px-2 py-1 text-xs">Change image</button>
    </div>
  `;
}
