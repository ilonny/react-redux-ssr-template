import React, { PureComponent } from 'react'
import './smm.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'

export default class Smm extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="big" title="Ведение вашего бренда<br/> в социальных сетях" text="Социальные сети позволяют максимально приблизиться<br> к вашему клиенту, получая мгновенный отклик"/>
                <div className="smm-wrap content">
                    <h5>В список работ для продвижения в социальных сетях входит:</h5>
                    <div className="text">
                        <p><strong>1. Анализ целевой аудитории.</strong></p>
                        <p>2. Оценка активности компании в соцмедиа.</p>
                        <p>3. Анализ конкурентов и их деятельности в соцсетях.</p>
                        <p><strong>4. Создание дизайна сообществ с учетом стилистики бренда.</strong></p>
                        <p>5. Подготовка шаблонов постов, создание контента. Мы будем общаться с вашей<br/> целевой аудиторией по всем правилам комъюнити-менеджмента.</p>
                        <p><strong>6. Использование различных способов продвижения: медиапланирование,<br/> таргетированная реклама, органические размещения и другие виды продвижения.</strong></p>
                    </div>
                </div>
                <div className="gr-wrap">
                    <div className="content">
                        <div className="gr-wrap__title">Что мы предлагаем</div>
                        <div className="blocks">
                            <div className="block">
                                <div className="title">Ведение сообществ</div>
                                <div className="text">Будем вести сообщество, добавлять контент, общаться с подписчиками.<br/> Каждый месяц готовим для вас отчёт о проделанной работе, <br/> анализ результатов и планы по дальнейшему развитию.</div>
                            </div>
                            <div className="block">
                                <div className="title">Платное продвижение</div>
                                <div className="text">Таргетированная реклама, органические размещения — <br/> вот что эффективно сегодня. Мы подберем инструментарий конкретно<br/> для вашего бизнеса и оформим все работы в формате четкого медиаплана.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrderForm parentPage="smm" />
            </div>
        )
    }
}