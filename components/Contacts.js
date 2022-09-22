function Contacts() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('contacts');
        element.innerHTML = `
        <p>Заказать товар или получить консультацию можно <strong>ежедневно с 8:00 до 22:00.</strong></p>
        <div class="contacts__widget">
            <button class="contacts___btn">Написать нам</button>
        </div>
        <p>Телефоны:<br>
            <span>+375 17</span> 3-007-007<br>
            <span>+375 29</span> 3-007-007<br>
            <span>+375 33</span> 3-007-007<br>
            <span>+375 25</span> 5-007-007
        </p>
        <p>Viber: <a href="https://www.viber.com/21vek.by" target="_blank">zinfog.com</a><br>
            Telegram: <a href="http://t.me/e21vekbot" target="_blank">zinfog.com</a><br>
            E-mail: <a href="mailto:21@21vek.by">zinfog@gmail.com</a> </p>
        <p>Онлайн-заказы через корзину принимаются ежедневно и&nbsp;круглосуточно! <br>
            Вы&nbsp;получите сообщение о&nbsp;подтверждении заказа в&nbsp;Viber или по&nbsp;смс на&nbsp;указанный номер
            телефона. Если&nbsp;же нам нужно будет уточнить у&nbsp;вас какие-либо детали по&nbsp;заказу&nbsp;— вам позвонит
            наш специалист.</p>
        <p><b>Для заказов по&nbsp;безналичному расчёту просим использовать только корзину сайта.</b><br>
            Если вам необходима консультация, обращайтесь по&nbsp;телефонам call-центра.<br>
            E-mail: <a href="mailto:beznal@21vek.by">zinfog@gmail.com</a> </p>
        <p><strong>По&nbsp;вопросам оптовых закупок пишите:<br>
            </strong><a href="mailto:opt@21vek.by">zinfog@gmail.com</a> </p>
        <p><strong>Контакты для прессы:</strong><br>
            E-mail: <a href="mailto:info@21vek.by">zinfog@gmail.com</a> <br>
        </p>
        <p><strong>Пункты выдачи заказов в&nbsp;Минске и&nbsp;в&nbsp;регионах</strong> <br>
            На&nbsp;странице<span style="margin-right:0.44em;"> </span><span style="margin-left:-0.44em;">«</span><a
                href="https://www.21vek.by/services/self_delivery.html">Самовывоз</a>» вы&nbsp;можете ознакомиться
            с&nbsp;контактами, координатами и&nbsp;графиком работы всех пунктов выдачи заказов.<br>
            Оформить самовывоз можно во&nbsp;всех областных центрах и&nbsp;многих других населенных пунктах Беларуси.</p>
        <p><b>Предложения, благодарности, запросы, претензии, обращения Потребителей по </b><b>указанным выше </b><b>адресам
                электронной почты не&nbsp;рассматриваются и&nbsp;решению по&nbsp;существу не&nbsp;подлежат.</b><br>
            При возникновении <a href="/info/return.html">гарантийного случая</a>, наличии претензии по&nbsp;качеству или
            комплектности приобретенной продукции просим вас <a href="https://www.21vek.by/info/return.html">заполнить форму
                обратной связи с&nbsp;отделом сервиса</a>.
        </p>`


        return element
    }

    this.init = () => {
        return this.create();
    }
}

const constacts = new Contacts().init();
export default constacts