function Main () {
    this.create = () => {
        const element = document.createElement('main')
        element.classList.add('main')
        element.innerHTML = `
            <div class = 'container'>
                <div class = 'main__wrapper'>
                    <h1>SPA</h1>
                </div>
            </div>
        `
        return element
    }
    this.init = () => {
        return this.create()
    }
}

const main = new Main().init()

export default main