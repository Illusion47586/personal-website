var x = window.matchMedia("(min-width: 910px)");
const terminalWindow = document.querySelector("#command-text");
if (x.matches) {
  let label = document.createElement("label");
  label.setAttribute("for", "command");
  label.setAttribute("id", "command-label");
  label.innerText = "Dhruv\\website> ";
  console.log("created");
  terminalWindow.appendChild(label);
}
