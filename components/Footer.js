function Footer() {
  this.create = () => {
    const element = document.createElement("footer");
    element.classList.add("footer");
    element.innerHTML = `<div class = 'container'>
          <div class="footer__wrapper">
          <div class="footer__list">
              <div class="footer__item"><img src="../img/vk-icon.png" alt=""></div>
              <div class="footer__item"><img src="../img/fb-icon.png" alt=""></div>
              <div class="footer__item"><img src="../img/insta-icon.png" alt=""></div>
          </div>
          <div class="footer__text">
              <h4 class="footer__title">Давайте дружить, это выгодно!</h4>
              <p class="footer__sale">Скидка 10% для друзей из социальных сетей.</p>
          </div>
        </div>
      </div>`;
    return element;
  };
  this.init = () => {
    return this.create();
  };
}

const footer = new Footer().init();

export default footer;
