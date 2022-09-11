import { getSlugOfHash, getPageData, hashChangeEvent } from "../utils/utils.js";

function Main() {
  this.localData = JSON.parse(localStorage.getItem("dataSPA"));

  this.element = "";

  this.create = () => {
    this.element = document.createElement("main");
    this.element.classList.add("main");

    this.render(location.hash);

    hashChangeEvent(this.render);

  };

  this.render = (hash) => {
    const slugOfHash = getSlugOfHash(hash);

    const mainData = getPageData(slugOfHash);
    const { title, content } = mainData;

    this.element.innerHTML = `
         <div class = 'container'>
            <div class = 'main__wrapper'>
                 <h1>${title}</h1>
                 <p>${content}</p>
             </div>
         </div>`;

    return this.element;
  };

  this.init = () => {

    this.create();
    return this.element;
  };
}

const main = new Main().init();

export default main;
