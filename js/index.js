// HTML generating functions
function a(text, link) {
  return (
    '<a class = "noselect" href = "' +
    link +
    '">' +
    text +
    '<i class="bx bx-link-external"></i></a>'
  );
}

function previewText(text, pathToImage) {
  return (
    '<span class = "hoverable green noSelect" data-image = "' +
    pathToImage +
    '" onmouseover="hoverData(this)" onmousedown="clickAction(this)" onmouseout="removeData(this)">' +
    text +
    "</span>"
  );
}

function yellow(text) {
  return '<span class = "yellow">' + text + "</span>";
}

function green(text) {
  return '<span class = "green">' + text + "</span>";
}

const tab = "    ";

const br = "<br/>";

/* Helper function */
function download_file(fileURL, fileName) {
  // for non-IE
  if (!window.ActiveXObject) {
    var save = document.createElement("a");
    save.href = fileURL;
    save.target = "_blank";
    var filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
    save.download = fileName || filename;
    if (
      navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
      navigator.userAgent.search("Chrome") < 0
    ) {
      document.location = save.href;
      // window event not working here
    } else {
      var evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: false,
      });
      save.dispatchEvent(evt);
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }
  }

  // for IE < 11
  else if (!!window.ActiveXObject && document.execCommand) {
    var _window = window.open(fileURL, "_blank");
    _window.document.close();
    _window.document.execCommand("SaveAs", true, fileName || fileURL);
    _window.close();
  }
}

const qna = {
  help:
    "List of commands:" +
    br +
    "# " +
    yellow("show skills") +
    " to know about my skills and technologies I am confortable with." +
    br +
    "# " +
    yellow("show projects") +
    " to know about my previous and ongoing projects. (The exciting part!🤩)" +
    br +
    "# " +
    yellow("show education") +
    " to know about my previous and ongoing education." +
    br +
    "# " +
    yellow("show experience") +
    " to know about my work experience." +
    br +
    "# " +
    yellow("show achievements") +
    " to know about my achievements." +
    br +
    "# " +
    yellow("download resume") +
    " to download my resume." +
    br +
    br +
    "Also you can contact me from any of the below links👇",
  test:
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
  test2: function () {
    console.log("yo");
  },
  test3: {
    ok: "yoyoyo",
  },
  show: {
    skills:
      "Here are the skills/technologies I:" +
      br +
      "1. can work with (no need to learn, already know): " +
      green(
        "HTML, CSS, JAVASCRIPT, REACT JS, NODE JS, DART(FLUTTER), TENSORFLOW, PYTHON, DSA, C++, PANDA"
      ) +
      br +
      "2. can work with (after learning): " +
      green(
        "pretty much anything, I am willing to learn anything that helps me grow and contribute more to the organisation I am part of😄."
      ) +
      br +
      br +
      // ! Fucking remove this before releasing
      "THIS IS NOT TO BE TAKEN SERIOUSLY DUH.", // as of now
    achievements: "None, as of now. sigh.",
    projects: function () {
      window.location.href = "projects.html";
    },
    experience:
      "Recently worked as a graphic design intern at " +
      a("@wildly.in", "https://www.instagram.com/wildly.in/") +
      "!",
    education:
      "Currently pursueing B.Tech in Information Technology from NSUT(formerly NSIT), Delhi.",
  },

  download: {
    resume: function () {
      // todo: change with this link with resume.pdf
      download_file(
        "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
        "something"
      );
    },
  },
};

// selectors
const terminal = document.querySelector(".code-box-content p");

const forms = document.forms;

const commandBox = forms["command-text"];

// the magic
commandBox.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = commandBox.querySelector('input[type="text"]');
  const value = input.value;
  const inputValues = value.split(" ");
  const command = inputValues[0].toLowerCase();
  const keyword = inputValues[inputValues.length - 1].toLowerCase();
  const listReply = qna[command];

  let reply = "<br/><br/>Dhruv\\website> " + value + "<br/>";
  terminal.innerHTML = terminal.innerHTML + reply;
  terminal.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  input.value = "";

  let response = "";

  if (listReply) {
    if (typeof listReply == "function") {
      listReply();
    } else if (typeof listReply == "string") {
      response = response + listReply;
    } else if (typeof listReply == "object") {
      const nestedListReply = listReply[keyword];
      if (typeof nestedListReply == "function") {
        nestedListReply();
      } else if (typeof nestedListReply == "string") {
        response = response + nestedListReply;
      } else {
        response =
          response +
          '"' +
          keyword +
          '"' +
          " not found in " +
          command +
          ". If you really want to know about this, that is what real " +
          yellow("Dhruv") +
          " is for." +
          br +
          "> Contact him using the below given links⬇";
        setTimeout(
          document.body.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          }),
          700
        );
      }
    }
  } else {
    response =
      response +
      '"' +
      command +
      '"' +
      " command not found 😅" +
      ". If you really want to know about this, that is what real " +
      yellow("Dhruv") +
      " is for." +
      br +
      "> Contact him using the below given links⬇";
    setTimeout(
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      }),
      700
    );
  }

  setTimeout(function () {
    terminal.innerHTML = terminal.innerHTML + response;

    terminal.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, 300);
});
