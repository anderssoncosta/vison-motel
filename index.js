
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const btn = document.querySelectorAll(".button");

let atual = 0;
let anter = 2;
let prox = 1;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => i == 0 ? gotoanter() : gotoprox());
}

const gotoanter = () => atual > 0 ? gotoNum(atual - 1) : gotoNum(slides.length - 1);

const gotoprox = () => atual < 2 ? gotoNum(atual + 1) : gotoNum(0);

const gotoNum = number => {
    atual = number;
    anter = atual - 1;
    prox = atual + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (prox == 3) {
        prox = 0;
    }

    if (anter == -1) {
        anter = 2;
    }

    slides[atual].classList.add("active");
    slides[anter].classList.add("prev");
    slides[prox].classList.add("next");
}