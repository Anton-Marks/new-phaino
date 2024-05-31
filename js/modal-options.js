const modal = document.querySelector("#modal-gallery-options");
//const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector("#close-gallery-options-button");

// close modal function
const closeModal = function () {
  modal.classList.remove("show-modal");
  modal.classList.add("hidden");
  document.body.style.position = ''
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
//overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  modal.classList.add("show-modal");
  document.body.style.position = 'Fixed'
  //overlay.classList.remove("hidden");
};

// open modal event
const elements = document.querySelectorAll('[data-modal-gallery]');

elements.forEach(el => {
  el.addEventListener('click', openModal);
});