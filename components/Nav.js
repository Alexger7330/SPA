function Nav () {

    this.localData = JSON.parse(localStorage.getItem("dataSPA"))
    
    this.create = () => {
        const element = document.createElement('nav')
        element.classList.add('nav')
        element.innerHTML = `
        <ul class = 'nav__items'>
            <li class = 'nav__item'>
                <a href = '#'>Home</a>
            </li>
            <li class = 'nav__item'>
                <a href = '#'>Catalog</a>
            </li>
            <li class = 'nav__item'>
                <a href = '#'>About us</a>
            </li>
            <li class = 'nav__item'>
                <a href = '#'>Contacts</a>
            </li>
        </ul>
        `
        return element
    }
    this.init = () => {
        return this.create()
    }
}

const nav = new Nav().init()

export default nav