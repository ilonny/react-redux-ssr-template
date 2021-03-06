import React, { PureComponent } from 'react'
import './marketing.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
import contextExample from '../../assets/images/context-example.jpg'
import seoExample from '../../assets/images/seo-example.jpg'

export default class Marketing extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="big" title="Продвижение и реклама<br> в интернете" text="Расскажем про отличия продвижения от рекламы<br> и подберем оптимальный вариант маркетинга<br> для вашего бизнеса"/>
                <div className="marketing-wrap">
                    <div class="df content">
                        <div class="side side--left">
                            <div className="side__title">Контекстная реклама</div>
                            <p>Контекстная реклама - это рекламное объявление, которое<br/> пользователи видят среди рельзультатов поиска по интересующей<br/> ключевой фразе.</p>
                            <p class="bold">Преимущества: </p>
                            <ul>
                                <li>Привлечение целевой аудитории</li>
                                <li>Быстрый запуск (после модерации объявлений, от 2-х часов)</li>
                                <li>Оплата за реальный трафик (деньги списываются только за переходы или показы)</li>
                                <li>Контроль затрат (отчетность доступна в режиме онлайн, а изменить рекламный бюджет можно в любой момент).</li>
                            </ul>
                            <p class="bold">Недостатки: </p>
                            <ul>
                                <li>Неправильно настроенная реклама может просто "слить" бюджет. Здесь важно не количество кликов или показов, а реальная конверсия с рекламы</li>
                                <li>Кратковременный эффект. Как только кончаются средства рекламной кампании - люди перестают видеть рекламу.</li>
                            </ul>
                            <p class="bold">Пример объявлений:</p>
                            <img src={contextExample} class="example-img" />
                            <p class="bold">Подходит для: </p>
                            <ul>
                                <li>Быстрого получения клиентов в бизнес</li>
                                <li>Сезонных и промо-акции</li>
                                <li>Крупному бизнесу - для имиджа, информационным порталам - для охвата максимальной аудитории</li>
                            </ul>
                        </div>
                        <div class="side side--right">
                            <div className="side__title">SEO продвижение</div>
                            <p>SEO продвижение - комплекс мероприятий по увеличению видимости сайта в поисковых системах по целевым поисковым запросам</p>
                            <p class="bold">Преимущества: </p>
                            <ul>
                                <li>Сайты из естественной выдачи вызывают большее доверие у пользователя</li>
                                <li>Единожды заняв высокие позиции, сайт будет стабильно приводить посетителей</li>
                                <li>Эффект от SEO сохраняется продолжительное время</li>
                                <li>При SEO оптимизации сайт становится максимально удобным и понятным для пользователя</li>
                            </ul>
                            <p class="bold">Недостатки: </p>
                            <ul>
                                <li>Эффект наступает не скоро. Таковы принципы работы поисковых систем, для достижения результата придется работать не один месяц</li>
                            </ul>
                            <p class="bold">Пример объявлений:</p>
                            <img src={seoExample} class="example-img" />
                            <p class="bold">Подходит для: </p>
                            <ul>
                                <li>Практически всех долгосрочных проектов, нуждающихся в постоянном притоке клиентов</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <div className="bottom-block">Важно понимать, что реклама или продвижение сайта практически не имеют смысла если Ваш сайт далек от идеала и <br/> требует существенной доработки, или у вас нет уверенности, что сможете обработать большой поток заявок.</div>
                    </div>
                </div>
                <OrderForm parentPage="marketing" />
            </div>
        )
    }
}