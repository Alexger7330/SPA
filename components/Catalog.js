function Catalog() {
  this.catalogData = [];

  this.getCatalogData = async () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => this.create(json));

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  this.create = async () => {
    if (this.catalogData.length === 0) {
      this.catalogData = await this.getCatalogData();
    }
    const element = document.createElement("div");

    let li = ``;
    this.catalogData.forEach(({ title, price, image, id}) => {
        li += `<li class = 'catalog__item'>
                    <div class = 'catalog__item__image'>
                        <img src = "${image}"alt = "${title}">
                    </div>
                    <div class = 'catalog__item__info'>
                        <div class = 'catalog__item__title'>${title}</div>
                        <div class = 'catalog__item__option'>
                            <div class = 'catalog__item__price'>${price}</div>
                            <button class = 'catalog__item__btn' id = '${id}'>Add to basket</button>
                        </div>
                    </div>
                </li>`
    });

    element.classList.add("catalog__wrapper");
    element.innerHTML = `<ul class = 'catalog__items'>
        ${li}
    </ul>`;

    return element;
  };

  this.init = () => {
    return this.create();
  };
}

const catalog = new Catalog().init();

export default catalog;
