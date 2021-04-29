import styles from './js/style.modules.js';
import 'jquery';
import 'popper.js';

document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.querySelector(".share");
    const social = document.querySelector(".social");

    shareButton.addEventListener("click", function () {
        social.classList.toggle("social--absolute")
    })
});