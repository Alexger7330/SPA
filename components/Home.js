function Home() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('Home');
        element.innerHTML = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Минск</a><a href="https://yandex.by/maps/157/minsk/?ll=27.556971%2C53.892195&utm_medium=mapframe&utm_source=maps&z=15.97" style="color:#eee;font-size:12px;position:absolute;top:14px;">Минск — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/-/CCUV7CRSKA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        <div class="map__bloc">
                    <p class="company__name"> 1st Floor, Sahya Govt CyberPark, GA College P.O Calicut, Kerala - 673014</p>
                    <p class="company__adress">hello@zinfog.com,<br>hr@zinfog.com</p>
                    <p class="company__number">тел. +91 8129 035 737</p>
                    <button class="map__button">Напишите нам</button>
                </div>`


        return element
    }

    this.init = () => {
        return this.create();
    }
}

const constacts = new Home().init();
export default constacts