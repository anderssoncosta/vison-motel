
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let atual = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => atual > 0 ? gotoNum(atual - 1) : gotoNum(slides.length - 1);

const gotoNext = () => atual < 2 ? gotoNum(atual + 1) : gotoNum(0);

const gotoNum = number => {
    atual = number;
    prev = atual - 1;
    next = atual + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 3) {
        next = 0;
    }

    if (prev == -1) {
        prev = 2;
    }

    slides[atual].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}