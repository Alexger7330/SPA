function Nav() {

    this.localData = JSON.parse(localStorage.getItem("dataSPA"))
    this.create = () => {
        const element = document.createElement('nav')
        element.classList.add('nav')
        let li = '';

        this.localData.forEach(({ slug, title }) => {
            li += ` <li class = 'nav__item'><a href = '#${slug}'>${title}</a></li>`
        });

        element.innerHTML = `
        <button class="nav__toggle"><label for="nav__toggle"></label></button>
        <input type="checkbox" id="nav__toggle">
        <ul class = 'nav__items'>
            ${li}
        </ul>`

        return element
    }
    
    this.init = () => {
        return this.create()
    }
}

const nav = new Nav().init()

export default nav