const qna = [{ question: "help", answer: "list of commands" }];

const terminal = document.querySelector(".code-box-content p");

const forms = document.forms;

const commandBox = forms["command-text"];

commandBox.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = commandBox.querySelector('input[type="text"]');
  const value = input.value;
  console.log(value);
  let reply = "<br/><br/>Dhruv\\website> " + value + "<br/>";
  for (let i = 0; i < qna.length; i++) {
    if (qna[i].question == value) {
      reply = reply + qna[i].answer;
      break;
    }
  }
  terminal.innerHTML = terminal.innerHTML + reply;
  terminal.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  //   terminal.scrollIntoView({ behavior: "smooth" });
  input.value = "";
});
