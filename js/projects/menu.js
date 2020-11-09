let root = document.documentElement;
i = 0;

const projects = ["bookworm", "b"];

const finalLength = projects.length;

const leftButton = document.querySelector(".menu-item--left");
const rightButton = document.querySelector(".menu-item--right");

function moveRight() {
  if (rightButton.getAttribute("data-active") == "true") {
    i++;
    endPoints();
  }
}

function moveLeft() {
  if (leftButton.getAttribute("data-active") == "true") {
    i--;
    endPoints();
  }
}

function endPoints() {
  root.style.setProperty("--animation-player", "none");
  if (i == 0) {
    leftButton.setAttribute("data-active", "false");
    rightButton.setAttribute("data-active", "true");
  } else if (i == finalLength - 1) {
    leftButton.setAttribute("data-active", "true");
    rightButton.setAttribute("data-active", "false");
  }
  chooseProject(i);
  console.log(i);
}

function chooseProject(i) {
  for (let index = 0; index < projects.length; index++) {
    const element = projects[index];
    document.body
      .querySelector("#" + element)
      .setAttribute("style", "display: none");
    if (index == i) {
      document.body
        .querySelector("#" + element)
        .setAttribute("style", "display: flex");

      if (window.matchMedia("(max-width: 768px)").matches) {
        document.body
          .querySelector("#" + element)
          .setAttribute("style", "display: block");
      }
    }
  }
}

// added back functionality to "back to terminal" button

const back = document.body.querySelector(".menu-item--back");

back.addEventListener("click", function () {
  window.location.href = "index.html";
});
