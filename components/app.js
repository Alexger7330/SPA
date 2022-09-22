// import header from "./Header.js";
// import main from "./Main.js";
// import footer from "./Footer.js";
import { getSlugOfHash, getPageData, hashChangeEvent } from "../utils/utils.js";

function App() {
  this.app = "";

  this.create = () => {
    this.app = document.createElement("div");
    this.app.classList.add("app");  
    document.body.appendChild(this.app);
  };

  this.getData = () => {
    fetch("../data/data.js")
      .then((responce) => responce.text())
      .then((data) => {
        setTimeout(() => {
          localStorage.setItem("dataSPA", data);

          this.setTitle(location.hash);
          hashChangeEvent(this.setTitle);
          this.render(location.hash);
          
        }, 0);
      });
  };

  this.setTitle = (hash) => {
    const slugOfHash = getSlugOfHash(hash);
    const data = getPageData(slugOfHash);
    document.title = data.pageTitle;
  };

  this.render = async (hash) => {

    const slugOfHash = getSlugOfHash(hash);

    if (!hash) {
      location.replace(`${location.pathname}#${slugOfHash}`);
    }

    const dataHeader = await import("./header.js");
    const dataMain = await import("./Main.js");
    const dataFooter = await import("./Footer.js");

    const header = dataHeader.default;
    const main = dataMain.default;
    const footer = dataFooter.default;

    this.app.appendChild(header);
    this.app.appendChild(main);
    this.app.appendChild(footer);

    // import('./header.js').then(data => {
    //   const header = data.default;
    //   this.app.appendChild(header)
    // })

    // this.app.appendChild(header);
    // this.app.appendChild(main);
    // this.app.appendChild(footer);
  };

  this.init = () => {
    this.getData();
    this.create();
  };
}

const app = new App().init();
