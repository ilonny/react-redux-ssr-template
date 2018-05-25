import React, { Component } from 'react'
import '../../assets/styles/gray-section.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
export default class Collab extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="Сотрудничество" text="Для фрилансеров или веб-студий"/>
                <div className="gray-section">
                    <div className="content text">
                        <p>Если у вас много заказов которые вы не хотите/не успеваете/не можете сделать, мы можем<br/> взять на себя любой из этапов разработки web-проекта. От прототипа до программирования.</p>
                        <p class="lh">Наши компетенции:<br/> - Создание дизайн концепции web-проектов<br/> - Кроссбраузерная адаптивная верстка (HTML5, SCSS, Stylus)<br/> - Создание SPA/PWA (React.js, Express.js)<br/> - Backend разработка на Yii2, Laravel, Symfony, Express.js.</p>
                        <p>Для начала сотрудничества напишите нам на почту <a href="mailto:hello@fflames.ru">hello@fflames.ru</a> или заполните форму обратной связи ниже.</p>
                    </div>
                </div>
                <OrderForm parentPage="collab" text="Будем рады интересным проектам" />
            </div>
        )
    }
}