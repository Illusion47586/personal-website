class project {
  constructor(title, image, disc, links, extended) {
    this.title = title;
    this.image = image;
    this.disc = disc;
    this.links = links;
    this.extended = extended;

    this.title.charAt(0).toUpperCase();
  }

  get getTitle() {
    return this.title;
  }

  get getImage() {
    return this.image;
  }

  get getDisc() {
    return this.disc;
  }

  get getLinks() {
    return this.links;
  }

  get getExtended() {
    return this.extended;
  }

  makeElement() {
    const main = document.body.querySelector(".projects");

    const img = main.querySelector(".projects-visual img");
    img.setAttribute("src", this.getImage);

    const textContent = main.querySelector(".projects-text");
    const heading = textContent.querySelector("h1");
    heading.innerHTML = this.index + " " + this.getTitle;
    const discContent = textContent.querySelector("p");
    discContent.innerHTML = this.getDisc;
    const buttonList = textContent.querySelector(".projects-text--buttons");
    for (let index = 0; index < this.getLinks.length; index++) {
      const a = document.createElement("a");
      a.classList.add("projects-text--buttons_item");
      a.href = this.getLinks[index].link;
      a.innerHTML = this.getLinks[index].text;
      buttonList.appendChild(a);
    }

    const subHeading = textContent.querySelector("h3");
    subHeading.innerText = this.getExtended.link;

    const afterSubHeading = textContent.querySelectorAll("p")[1];
    afterSubHeading.innerHTML = this.getExtended.content;
  }
}

function highlight(text) {
  return '<span class="projects-text--highlight">' + text + "</span>";
}

i = 0;

const bookmarkDesc =
  highlight("BookMark") +
  " is a simple app that I made for learning" +
  highlight("flutter") +
  ", a framework for cross platform app development. It is a very simple app, but potentially solves a very simple problem, the problem of facing trouble inculcating a daily reading habit, and well, sometimes forgetting where you left last time reading. <br />";

const bookmarkExtended = `1. <span class="projects-text--highlight">Designing: </span> I
          designed the app first, a proper flowchart of what I wanted, then the
          positioning of different elements, and finally the UI colors and font
          selection. <br /><br />
          2. <span class="projects-text--highlight">Coding: </span> Now that I
          knew what I was looking forward as an end product, the only problem
          was that I was really new to flutter, I didn't know how some things
          are done, like creating a database, which databse to use, persisting
          data, fetching data from the internet etc. This step, as expected took
          the longest trials. <br /><br />
          3.
          <span class="projects-text--highlight">Cleaning the code: </span> Now
          since the code was ready, and app was working, I tried to keep the
          code DRY as much as I could. <br /><br />
          4. <span class="projects-text--highlight">Testing: </span> I shared
          the app among my friends, who then tried the app, and told me about
          some bugs and required features. <br /><br />
          5. <span class="projects-text--highlight">Releasing: </span> Added the
          much-demanded dark mode to the app, and finally published it to the
          play store.
          <br />`;

const bookmark = new project(
  "BookMark",
  "../assets/projects/bookworm.png",
  bookmarkDesc,
  [
    {
      text: '<i class="bx bxl-play-store"></i>Find it here',
      link: "wwww.google.com",
    },
    {
      text: '<i class="bx bxl-github"></i>Code is here',
      link: "wwww.google.com",
    },
  ],
  { heading: "Process:", content: bookmarkExtended }
);

project_data = [];
