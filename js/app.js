const showABtn = document.getElementById("show-a");
const hideABtn = document.getElementById("hide-a");
const divA = document.getElementById("a-moving");

const showBBtn = document.getElementById("show-b");
const hideBBtn = document.getElementById("hide-b");
const divB = document.getElementById("b-moving");

const showCBtn = document.getElementById("show-c");
const hideCBtn = document.getElementById("hide-c");
const divC = document.getElementById("c-moving");

// div a
hideABtn.addEventListener("click", (e) => {
  divA.style.display = "none";
});

showABtn.addEventListener("click", (e) => {
  divA.style.display = "initial";
});

// div b
hideBBtn.addEventListener("click", (e) => {
  divB.style.display = "none";
});

showBBtn.addEventListener("click", (e) => {
  divB.style.display = "initial";
});

// div c
hideCBtn.addEventListener("click", (e) => {
  divC.style.display = "none";
});

showCBtn.addEventListener("click", (e) => {
  divC.style.display = "initial";
});
