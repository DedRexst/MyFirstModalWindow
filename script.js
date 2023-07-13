"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseMedal = document.querySelector(".close-modal");
const btnsOpenMedal = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".hidden");

const closeMedal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const openMedal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenMedal.length; i++) {
    console.log(btnsOpenMedal[i]);
    btnsOpenMedal[i].addEventListener("click", openMedal);
}
btnCloseMedal.addEventListener("click", closeMedal);
overlay.addEventListener("click", closeMedal);
