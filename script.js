"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseMedal = document.querySelector(".close-modal");
const btnsOpenMedal = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".hidden");
for (let i = 0; i < btnsOpenMedal.length; i++) {
    console.log(btnsOpenMedal[i]);
    btnsOpenMedal[i].addEventListener("click", function () {
        // hidden.style.display = "initial";
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}
btnCloseMedal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");

    // hidden.style.display = "none";
});
