const modalRefs = {
  gallery: document.querySelectorAll(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxContent: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
};

modalRefs.gallery.forEach((element) => {
  element.addEventListener("click", galleryClickHandler);
});
modalRefs.lightboxContent.addEventListener("click", galleryCloseHandler);

function galleryClickHandler(event) {
  if (event.target === event.currentTarget) return;
  modalRefs.lightboxImage.src = event.target.src;
  modalRefs.lightboxImage.alt = event.target.alt;
  modalRefs.lightbox.classList.add("lightbox__is-open");
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", closeByEscape);
}

function galleryCloseHandler(event) {
  if (event.target !== event.currentTarget) return;
  modalRefs.lightbox.classList.remove("lightbox__is-open");
  document.body.style.overflow = "";
  window.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(event) {
  if (event.key !== "Escape") return;
  modalRefs.lightbox.classList.remove("lightbox__is-open");
  document.body.style.overflow = "";
  window.removeEventListener("keydown", closeByEscape);
}
