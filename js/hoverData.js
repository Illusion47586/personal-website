newAvailable = true;
var e;
var m = window.matchMedia("(min-width: 410px)");

function remtopx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// function pxtorem(pix) {
//   return pix / parseFloat(getComputedStyle(document.documentElement).fontSize);
// }

function hoverData(x) {
  if (newAvailable && m.matches) {
    newAvailable = false;
    const f = x.getAttribute("data-image");
    e = document.createElement("img");
    e.setAttribute("src", f);
    e.classList.add("hoverData", "removeThis");
    e.style.top = x.pageY;
    e.style.left = x.pageX;
    // const codeWindow = document.querySelector(".code-box");
    // const width = codeWindow.clientWidth;
    // const anchorTop = document
    //   .querySelector(".code-box-top")
    //   .getBoundingClientRect().top;
    // const anchorBottom = document
    //   .querySelector("#command-text")
    //   .getBoundingClientRect().top;
    // // const height = codeWindow.clientHeight;
    // const xPos = x.getBoundingClientRect();
    // const top = xPos.top;
    // const left = xPos.left;
    // if (anchorTop - top < remtopx(10)) {
    //   e.style.top = `${top}px`;
    // } else if (anchorBottom - top < remtopx(10)) {
    //   e.style.top = `${anchorBottom - top - remtopx(13)}px`;
    // }
    // if (left < remtopx(10)) {
    //   e.style.left = `${left}px`;
    // } else if (width - left < remtopx(10)) {
    //   e.style.left = `${width - left - remtopx(5)}px`;
    // }
    x.appendChild(e);
    // console.log(height, width);
    // console.log(top, left);
    document.querySelector(".hoverData").focus();
    console.log(f);
    setTimeout(() => {
      e.style.animationName = "collapseHoverData";
      setTimeout(() => {
        x.removeChild(e);
        newAvailable = true;
      }, 400);
    }, 2600);
  }
}

// function removeData(x) {
//   if (!newAvailable && m.matches) {
//     setTimeout(() => {
//       e.style;
//       e.setAttribute("style", "animation-name: collapseHoverData");
//       setTimeout(() => {
//         x.removeChild(e);
//         newAvailable = true;
//       }, 400);
//     }, 2600);
//   }
// }

function clickAction(x) {
  if (m.matches) {
    if (newAvailable) {
      newAvailable = false;
      const f = x.getAttribute("data-image");
      e = document.createElement("img");
      e.setAttribute("src", f);
      e.classList.add("hoverData", "removeThis");
      x.appendChild(e);
      const top = x.offsetTop;
      const left = x.offsetLeft;
      console.log(top, left);
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
