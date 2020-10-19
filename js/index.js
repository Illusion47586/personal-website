// HTML generating functions
function a(text, link) {
  return (
    '<a class = "noselect" href = "' +
    link +
    '">' +
    text +
    '<i class="bx bx-link-external"></i> </a>'
  );
}

function previewText(text, pathToImage) {
  return (
    '<span class = "hoverable green noSelect" data-image = "' +
    pathToImage +
    '" onmouseover="hoverData(this)" onmousedown="clickAction(this)" onmouseout="removeData(this)">' +
    text +
    "</span> "
  );
}

function yellow(text) {
  return '<span class = "yellow">' + text + "</span>";
}

function green(text) {
  return '<span class = "green">' + text + " </span>";
}

const br = "<br/>";

// the answer lists
const qna = [
  {
    question: "help",
    answer:
      "List of commands:" +
      br +
      "# " +
      yellow("skills") +
      " to know about my skills and technologies I am confortable with." +
      br +
      "# " +
      yellow("projects") +
      " to know about my previous and ongoing projects." +
      br +
      "# " +
      yellow("education") +
      " to know about my previous and ongoing education." +
      br +
      "# " +
      yellow("experience") +
      " to know about my work experience." +
      br +
      "# " +
      yellow("resume") +
      " to download my resume." +
      br +
      br +
      "Also you can contact me from any of the below links👇",
  },
  {
    question: "ok",
    answer: previewText("haa haa ok", "https://via.placeholder.com/200"),
  },
  {
    question: "test",
    answer:
      "Testing stuff:" +
      br +
      "# " +
      a("this is a link") +
      br +
      "# " +
      yellow("yellow text") +
      br +
      "# " +
      green("green text normal") +
      br +
      "# " +
      previewText(
        "green text with hover preview(works only on pc)",
        "https://unsplash.it/1080/1080"
      ) +
      br +
      br +
      "Also none of the below links work👇",
  },
];

// selectors
const terminal = document.querySelector(".code-box-content p");

const forms = document.forms;

const commandBox = forms["command-text"];

// the magic
commandBox.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = commandBox.querySelector('input[type="text"]');
  const value = input.value;
  // console.log(value);
  let reply = "<br/><br/>Dhruv\\website> " + value + "<br/>";
  let found = false;
  let valueLower = value.toLowerCase();
  for (let i = 0; i < qna.length; i++) {
    if (qna[i].question == valueLower) {
      reply = reply + qna[i].answer;
      found = true;
      break;
    }
  }
  if (found == false)
    reply =
      reply +
      '"' +
      value +
      '"' +
      " command not recognized. If you really want to know about this, that is what real " +
      yellow("Dhruv") +
      " is for." +
      br +
      "> wanna contact? (y/n):";
  terminal.innerHTML = terminal.innerHTML + reply;
  terminal.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  input.value = "";
});
