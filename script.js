"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
//console.log(btnsOpenModal);

const openModal = function () {
  //console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //we should not pass openModal as a function in below code bcoz if it is passed as a function without calling it it will execute
  btnsOpenModal[i].addEventListener("click", openModal);

//calling closeModal function
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//using Escape key to clode the modal

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
