// import header from "./Header.js";
// import main from "./Main.js";
// import footer from "./Footer.js";

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
          this.render();
        }, 0);
      });
  };

  this.render = async () => {

    const dataHeader = await import('./header.js');
    const header = dataHeader.default;
    this.app.appendChild(header)

    const dataMain = await import('./Main.js');
    const main = dataMain.default;
    this.app.appendChild(main)

    const dataFooter = await import('./Footer.js');
    const footer = dataFooter.default;
    this.app.appendChild(footer)

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
