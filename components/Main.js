import { getSlugOfHash, getPageData, hashChangeEvent } from "../utils/utils.js";
import { CATALOG, CONTACTS } from "../constants/constants.js";
import product from "./Product.js";

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

    this.element.innerHTML = this.getHTMLTemplate(title, content);

    if (slugOfHash.includes(CATALOG)) {
      if (slugOfHash === CATALOG) {
        import("./Catalog.js").then((response) => {
          let responseDefault = response.default;
          responseDefault.then((data) => {
            this.element.innerHTML = this.getHTMLTemplate(
              title,
              content,
              data.outerHTML
            );

            const addToCartBtns = this.element.querySelectorAll(
              ".catalog__item__btn"
            );
            addToCartBtns.forEach((btn) => {
              btn.addEventListener("click", (e) => {
                console.log(e.target.id);
                this.addToCart(e.target.id)
              });
            });
          });
        });
      }

      if (slugOfHash.includes("/")) {
        this.element.innerHTML = `loading....`;
        import("./Product.js").then((response) => {
          const product = response.default.init();
          product.then((productData) => {
            this.element.innerHTML = productData.outerHTML;
          });
        });
      }
    }

    if (slugOfHash === CONTACTS) {
      import("./Contacts.js").then((response) => {
        let responseDefault2 = response.default;
        this.element.innerHTML = this.getHTMLTemplate(title,
          responseDefault2.outerHTML
        );
      });
    }

    return this.element;
  };

  this.card = [];

  this.addToCart = (idProduct) => {
    const dataCatalog = JSON.parse(localStorage.getItem("catalogData"));
    const product = dataCatalog.find(({ id }) => id === +idProduct);
    
  };

  this.getHTMLTemplate = (title, content, htmlElement) => {
    return `<div class = 'container'>
            <div class = 'main__wrapper'>
                  <h1>${title}</h1>
                  ${htmlElement ? htmlElement : ""}
                  <p>${content ? content : ""}</p>
              </div>
          </div>`;
  };

  this.init = () => {
    this.create();
    return this.element;
  };
}

const main = new Main().init();

export default main;
