function Product() {

    this.getProductData = async (id) => {
        const respone = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await respone.json()
        return data
    }

    this.create = async (idProduct) => {
        const productData = await this.getProductData(idProduct)
        const element = document.createElement('div')
        const { title, image, description, price, id } = productData
        element.classList.add('product')
        element.classList.add('container')

        element.innerHTML = `<div class="product__wrapper">
            <h1>${title}<h1>    
                <img src="${image}" alt="${title}">
                    <p class = 'product__discription'>${description}</p>
                    <div class='product__option'>
                        <div class='product__price'>${price}₽</div>
                        <button class='add__product__cart' id='${id}'>Add to basket</button>
                    </div>
                </div>`

        return element
    }


    this.init = () => {
        const idProduct = location.hash.split('/')[1];
        return this.create(idProduct)
    }
}

const product = new Product()
export default product