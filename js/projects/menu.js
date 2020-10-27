let root = document.documentElement;
i = 0;
// todo: change this with length of array with project details
const finalLength = 5;

const leftButton = document.querySelector(".menu-item--left");
const rightButton = document.querySelector(".menu-item--right");

function moveRight() {
  if (rightButton.getAttribute("data-active") == "true") {
    if (i == 0) {
      leftButton.setAttribute("data-active", "true");
      root.style.setProperty("--animation-player", "none");
    }
    if (i == finalLength - 1) {
      rightButton.setAttribute("data-active", "false");
    } else {
      rightButton.setAttribute("data-active", "true");
    }
    i++;
  }
}

function moveLeft() {
  if (leftButton.getAttribute("data-active") == "true") {
    i--;
    if (i == finalLength) {
      rightButton.setAttribute("data-active", "false");
    } else {
      rightButton.setAttribute("data-active", "true");
    }
    if (i == 0) {
      leftButton.setAttribute("data-active", "false");
      root.style.setProperty("--animation-player", "none");
    }
  }
}
