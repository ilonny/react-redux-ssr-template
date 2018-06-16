import React, { PureComponent } from 'react'
import './sites.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'

export default class Sites extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="big" title="Разработка адаптивных<br> сайтов" text="Мы не делаем «просто сайты»,<br> Мы увеличиваем объемы продаж и решаем задачи оптимизации бизнес-процессов.<br> Сайт — один из этапов работы в решении таких задач."/>
                <div className="sites-wrap">
                    <div className="content">
                        <h4>Для достижения максимальной эффективности<br/> сайт должен обладать определенными характеристиками</h4>
                        <div className="num-blocks">
                            <div className="block">
                                <p className="num">01</p>
                                <span className="divider"></span>
                                <div className="text">
                                    <div className="title">Сайт решает конкретные задачи</div>
                                    <div className="desc">Например, продает товары, представляет<br/> бренд в интернете.</div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="text">
                                    <div className="title">Дизайн сайта «говорит»<br/> про основные идеи</div>
                                    <div className="desc">Например, отличия компании<br/> от конкурентов.</div>
                                </div>
                                <span className="divider"></span>
                                <p className="num">02</p>
                            </div>
                            <div className="block">
                                <p className="num">03</p>
                                <span className="divider"></span>
                                <div className="text">
                                    <div className="title">Интеграция с любыми<br/> внешними сервисами</div>
                                    <div className="desc">Например: CRM-системы,<br/> E-mail рассылки, веб-аналитика.</div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="text">
                                    <div className="title">Мотивирует пользователей совершать<br/> необходимые действия</div>
                                    <div className="desc">И приводит к нужной цели: оформлению заказа,<br/> заполнению формы обратной связи.</div>
                                </div>
                                <span className="divider"></span>
                                <p className="num">04</p>
                            </div>
                            <div className="block">
                                <p className="num">05</p>
                                <span className="divider"></span>
                                <div className="text">
                                    <div className="title">Контент сайта в доступной форме</div>
                                    <div className="desc">Текстовая и графическая информация,<br/> работающая на достижение целей сайта</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sites-table">
                        <div className="content">
                            <h5>Что входит в разработку сайта</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Предпроектная подготовка</td>
                                        <td>Изучение вашего бизнеса, конкурентной обстановки, анализ потребностей клиентов. Разработка сценариев поведения пользователей на сайте.</td>
                                    </tr>
                                    <tr>
                                        <td>Создание прототипа и ТЗ</td>
                                        <td>Создание эскизов страниц сайта, на которых схематично отображаются элементы сайта, сценарии поведений посетителей наглядно изображаются в виде цепочек состояний.</td>
                                    </tr>
                                    <tr>
                                        <td>Разработка дизайн концепции</td>
                                        <td>Изучение брендбука компании (при наличии), разработка визуального мудборда, поиск идей на различных платформах, создание основной концепции для визуальной коммуникации.</td>
                                    </tr>
                                    <tr>
                                        <td>Разработка дизайн-макетов сайта</td>
                                        <td>Изготовление макетов сайта — изображений, являющихся демонстрацией того, как они будут выглядеть в браузере.</td>
                                    </tr>
                                    <tr>
                                        <td>Верстка и программирование сайта</td>
                                        <td>Непосредственное создание вашего сайта.</td>
                                    </tr>
                                    <tr>
                                        <td>Тестирование и запуск</td>
                                        <td>Выкладка сайта на тестовый сервер. Проверка работы сайта во всех браузерах на всех видах устройств, наполнение тестовом контентом для проверки системы администрирования.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <OrderForm parentPage="sites" />
            </div>
        )
    }
}