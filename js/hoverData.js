newAvailable = true;
var e;
var m = window.matchMedia("(min-width: 410px)");

function hoverData(x) {
  if (newAvailable && m.matches) {
    newAvailable = false;
    const f = x.getAttribute("data-image");
    e = document.createElement("img");
    e.setAttribute("src", f);
    e.classList.add("hoverData", "removeThis");
    x.appendChild(e);
    document.querySelector(".hoverData").focus();
    console.log(f);
  }
}

function removeData(x) {
  if (!newAvailable && m.matches) {
    setTimeout(() => {
      e.setAttribute("style", "animation-name: collapseHoverData");
      setTimeout(() => {
        x.removeChild(e);
        newAvailable = true;
      }, 400);
    }, 2600);
  }
}

function clickAction(x) {
  if (m.matches) {
    if (newAvailable) {
      newAvailable = false;
      const f = x.getAttribute("data-image");
      e = document.createElement("img");
      e.setAttribute("src", f);
      e.classList.add("hoverData", "removeThis");
      x.appendChild(e);
      document.querySelector(".hoverData").focus();
      console.log(f);
    }
    setTimeout(() => {
      e.setAttribute("style", "animation-name: collapseHoverData");
      setTimeout(() => {
        x.removeChild(e);
        newAvailable = true;
      }, 400);
    }, 5000);
  }
}
