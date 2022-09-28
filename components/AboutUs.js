function AboutUs() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('AboutUs');
        element.innerHTML = ` <p class = 'zinp'>Zinfog Codelabs are experts in the field of Odoo ERP implementation and solutions. Our aim is to provide ERP solutions so simple that even an employee with limited technical skills can use them. To achieve this our R&D team has integrated Artificial Intelligence and IoT technologies into the mix.</p>
        <p class = 'zinp'>Ours is a team of experienced Python and Django developers and strategists that use the latest technologies and tools to develop innovative products and solutions. This makes sure that we deliver cost effective solutions in a time effective manner.</p>
        <p class = 'zinp'>We started Zinfog Codelabs Pvt Ltd in 2017, with an aim to provide simple and efficient ERP solutions to the masses. In the past two years our association with Appmotions Technologies saw us venture out into the fields of Mobile App development, and Website Design and development.</p>
        `

        return element
    }

    this.init = () => {
        return this.create();
    }
}

const constacts = new AboutUs().init();
export default constacts