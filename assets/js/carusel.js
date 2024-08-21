const recFirstSlides = document.querySelectorAll(".recFirstSlide"),
    recFirstNext = document.querySelector(".recFirstNext"),
    recFirstPrev = document.querySelector(".recFirstPrev"),
    recFirstTotal = document.querySelector("#recFirstTotal"),
    recFirstCurrent = document.querySelector("#recFirstCurrent"),
    recFirstWrapper = document.querySelector(".recFirstWrapper"),
    recFirstInner = document.querySelector(".recFirstInner"),
    recFirstWidth = window.getComputedStyle(recFirstWrapper).width;

let firstSlideIndex = 1;
let firstOffset = 0;
const firstSlideWidth = +recFirstWidth.slice(0, recFirstWidth.length - 2);

if (recFirstSlides.length < 10) {
    recFirstTotal.textContent = `0${recFirstSlides.length}`;
    recFirstCurrent.textContent = `0${firstSlideIndex}`;
} else {
    recFirstTotal.textContent = recFirstSlides.length;
    recFirstCurrent.textContent = firstSlideIndex;
}

recFirstInner.style.width = 100 * recFirstSlides.length + "%";
recFirstInner.style.display = "flex";
recFirstInner.style.transition = 'all 1s ease'
recFirstWrapper.style.overflow = "hidden";

function firstChangerSlideIndex() {
    if (recFirstSlides.length < 10) {
        recFirstCurrent.textContent = `0${firstSlideIndex}`;
    } else {
        recFirstCurrent.textContent = firstSlideIndex;
    }
}

function firstTimerSlide() {
    if (firstOffset === firstSlideWidth * (recFirstSlides.length - 1)) {
        firstOffset = 0;
        firstSlideIndex = 1;
    } else {
        firstOffset += firstSlideWidth;
        firstSlideIndex++;
    }

    recFirstInner.style.transform = translateX(`-${firstOffset}px`);
    firstChangerSlideIndex();
}
const firstSlideInterval = 6000;

recFirstNext.addEventListener("click", function () {
    clearInterval(firstTimerSlide);
    if (firstOffset === firstSlideWidth * (recFirstSlides.length - 1)) {
        return;
    } else {
        firstOffset += firstSlideWidth;
        firstSlideIndex++;
    }

    recFirstInner.style.transform = `translateX(-${firstOffset}px)`;
    firstChangerSlideIndex();
});

recFirstPrev.addEventListener("click", function () {
    clearInterval(firstTimerSlide);
    if (firstOffset === 0) {
        return;
    } else {
        firstOffset -= firstSlideWidth;
        firstSlideIndex--;
    }

    recFirstInner.style.transform = `translateX(-${firstOffset}px)`;
    firstChangerSlideIndex();
});


firstChangerSlideIndex();



const recSecondSlides = document.querySelectorAll(".recSecondSlide"),
    recSecondNext = document.querySelector(".recSecondNext"),
    recSecondPrev = document.querySelector(".recSecondPrev"),
    recSecondTotal = document.querySelector("#recSecondTotal"),
    recSecondCurrent = document.querySelector("#recSecondCurrent"),
    recSecondWrapper = document.querySelector(".recSecondWrapper"),
    recSecondInner = document.querySelector(".recSecondInner"),
    recSecondWidth = window.getComputedStyle(recSecondWrapper).width;

let secondSlideIndex = 1;
let secondOffset = 0;
const secondSlideWidth = +recSecondWidth.slice(0, recSecondWidth.length - 2);

if (recSecondSlides.length < 10) {
    recSecondTotal.textContent = `0${recSecondSlides.length}`;
    recSecondCurrent.textContent = `0${secondSlideIndex}`;
} else {
    recSecondTotal.textContent = recSecondSlides.length;
    recSecondCurrent.textContent = secondSlideIndex;
}

recSecondInner.style.width = 100 * recSecondSlides.length + "%";
recSecondInner.style.display = "flex";
recSecondInner.style.transition = 'all 1s ease'
recSecondWrapper.style.overflow = "hidden";

function secondChangerSlideIndex() {
    if (recSecondSlides.length < 10) {
        recSecondCurrent.textContent = `0${secondSlideIndex}`;
    } else {
        recSecondCurrent.textContent = secondSlideIndex;
    }
}

function secondTimerSlide() {
    if (secondOffset === secondSlideWidth * (recSecondSlides.length - 1)) {
        secondOffset = 0;
        secondSlideIndex = 1;
    } else {
        secondOffset += secondSlideWidth;
        secondSlideIndex++;
    }

    recSecondInner.style.transform = translateX(`-${secondOffset}px`);
    secondChangerSlideIndex();
}
const secondSlideInterval = 6000;

recSecondNext.addEventListener("click", function () {
    clearInterval(secondTimerSlide);
    if (secondOffset === secondSlideWidth * (recSecondSlides.length - 1)) {
        return;
    } else {
        secondOffset += secondSlideWidth;
        secondSlideIndex++;
    }

    recSecondInner.style.transform = `translateX(-${secondOffset}px)`;
    secondChangerSlideIndex();
});

recSecondPrev.addEventListener("click", function () {
    clearInterval(secondTimerSlide);
    if (secondOffset === 0) {
        return;
    } else {
        secondOffset -= secondSlideWidth;
        secondSlideIndex--;
    }

    recSecondInner.style.transform = `translateX(-${secondOffset}px)`;
    secondChangerSlideIndex();
});

secondChangerSlideIndex();