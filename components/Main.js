import { getSlugOfHash, getPageData, hashChangeEvent } from "../utils/utils.js";
import { CATALOG, CONTACTS, CART } from "../constants/constants.js";

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

    if (slugOfHash === CART) {
      import('./Cart.js').then(response => {

        const cartData = response.default.init();
        this.element.innerHTML = cartData.outerHTML;

        const deleteCartBtn = this.element.querySelectorAll('.delete__product__btn')

        deleteCartBtn.forEach((btn) => {
          btn.addEventListener('click', (e) => {

            this.deleteFromCart(e.target.dataset.delete);
            this.render(location.hash)

            // let cartDataUp = response.default.init();
            // this.element.innerHTML = cartDataUp.outerHTML;
          })
        });


      })
    }

    if (slugOfHash.includes(CATALOG)) {
      this.element.innerHTML = `<div class="loader">Loading...</div>`

      if (slugOfHash === CATALOG) {
        import("./Catalog.js").then((response) => {
          let responseDefault = response.default;
          responseDefault.then((data) => {

            this.element.innerHTML = this.getHTMLTemplate(title, content, data.outerHTML);
            const addToCartBtns = this.element.querySelectorAll(".catalog__item__btn");

            addToCartBtns.forEach((btn) => {

              btn.addEventListener("click", (e) => {
                this.addToCart(e.target.id)
              });
            });
          });
        });
      }

      if (slugOfHash.includes('/')) {
        this.element.innerHTML = `<div class="loader">Loading...</div>`

        import('./Product.js').then(response => {

          const product = response.default.init();
          product.then(productData => {

            this.element.innerHTML = productData.outerHTML;
            const addProductBtn = this.element.querySelector('.add__product__cart');
            addProductBtn.addEventListener('click', (e) => {

              this.addToCart(e.target.id)
            })
          })
        })
      }
    }

    if (slugOfHash === CONTACTS) {
      import("./Contacts.js").then((response) => {

        let responseDefault2 = response.default;
        this.element.innerHTML = this.getHTMLTemplate(title, responseDefault2.outerHTML);
      });
    }

    return this.element;
  };

  this.cart = JSON.parse(localStorage.getItem('cart')) || [];

  this.addToCart = (idProduct) => {

    const dataCatalog = JSON.parse(localStorage.getItem('catalogData'));
    const product = dataCatalog.find(({ id }) => id === +idProduct)
    const arrayIndex = this.cart.findIndex(({ id }) => id === +idProduct)

    if (arrayIndex !== -1) {
      this.cart[arrayIndex].count += 1;
    } else {
      product.count = 1;
      this.cart.push(product)
    }

    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  this.deleteFromCart = (idProduct) => {
    this.cart = this.cart.filter(item => item.id !== +idProduct)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

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