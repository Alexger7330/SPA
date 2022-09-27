function Cart() {
    this.cart = []
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('cart')
        if (this.cart.length === 0) {
            element.innerHTML = `<h2>Корзина пуста</h2>`
        } else {
            let cartElement = ''
            this.cart.forEach(({ title, price, count, id }, index) => {
                cartElement += `
                    <div class="cart__item">
                        <p>${index + 1} ${title} - кол: ${count}, стоимость - ${count * price}</p> <button class = "delete__product__btn" data-delete = "${id}">Delete product</button>
                    </div>
                `
            });
            element.innerHTML = cartElement
        }

        return element
    }

    this.init = () => {
        this.cart = JSON.parse(localStorage.getItem('cart')) || []
        return this.create();
    }
}

const cart = new Cart()

export default cart