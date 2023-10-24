// const
const showABtn = document.getElementById("show-a");
const hideABtn = document.getElementById("hide-a");
const divA = document.getElementById("a-moving");

const showBBtn = document.getElementById("show-b");
const hideBBtn = document.getElementById("hide-b");
const divB = document.getElementById("b-moving");

const showCBtn = document.getElementById("show-c");
const hideCBtn = document.getElementById("hide-c");
const divC = document.getElementById("c-moving");

// hide divs by default
divA.style.visibility = "hidden";
divB.style.visibility = "hidden";
divC.style.visibility = "hidden";

// div a
hideABtn.addEventListener("click", (e) => {
  divA.style.visibility = "hidden";
});

showABtn.addEventListener("click", (e) => {
  divA.style.visibility = "visible";
});

// div b
hideBBtn.addEventListener("click", (e) => {
  divB.style.visibility = "hidden";
});

showBBtn.addEventListener("click", (e) => {
  divB.style.visibility = "visible";
});

// div c
hideCBtn.addEventListener("click", (e) => {
  divC.style.visibility = "hidden";
});

showCBtn.addEventListener("click", (e) => {
  divC.style.visibility = "visible";
});
