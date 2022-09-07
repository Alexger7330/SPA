function Footer() {
  this.create = () => {
    const element = document.createElement("footer");
    element.classList.add("footer");
    element.innerHTML = `
          <div class = 'container'>
            <div class = "footer__wrapper">
                <span>Text</span>
            </div>
          </div>
        `;
    return element;
  };
  this.init = () => {
    return this.create();
  };
}

const footer = new Footer().init();

export default footer;
