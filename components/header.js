import nav from './Nav.js'

function Header() {
    this.init = () => {
        return this.create()
    }

    this.create = () => {
        const element = document.createElement('header');
        element.classList.add("header");
        element.innerHTML = `
            <div class = 'container'>
                <div class = 'header__wrapper'>
                    <div class = 'header__logo'>
                        <a  href = '/' >
                            <img src ="../img/swift-15.svg">
                        </a>
                    </div>
                    ${nav.outerHTML}
                </div>
            </div>
        `
        return element
    }
}

const header = new Header().init();
export default header