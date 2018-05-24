import React, { Component } from 'react'
import '../../assets/styles/gray-section.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
import DesignerIcon from '../../assets/images/vacancy-icon-1.svg'
import ManagerIcon from '../../assets/images/vacancy-icon-2.svg'
import DevIcon from '../../assets/images/vacancy-icon-3.svg'
import SendIcon from '../../assets/images/send.svg'

export default class Vacancy extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    clickButton(){
        document.getElementById('order-form-name-input').focus();
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="Вакансии" text="Мы всегда в поиске талантливых людей"/>
                <div className="gray-section vacancy">
                    <div className="content text">
                        <p>Мы не смотрим на количество просиженных в офисе месяцев, у тебя может не быть портфолио<br/> и опыта, но если ты мечтаешь покорять digital-пространства, обязательно откликайся на наши<br/> вакансии, мы ценим устремленных людей.</p>
                        <div className="vacancy-blocks">
                            <div className="block">
                                <div className="img-wrap">
                                    <img src={DesignerIcon} />
                                </div>
                                <div className="title">Web-дизайнер</div>
                                <p className="text">Разработка концепции и дизайн<br/> веб-проектов. Проектирование и отрисовка<br/> адаптивных интерфейсов.</p>
                                <button onClick={() => this.clickButton()} className="submit-button">
                                    <span>Откликнуться</span>
                                    <img src={SendIcon} />
                                </button>
                            </div>
                            <div className="block">
                                <div className="img-wrap">
                                    <img src={ManagerIcon} />
                                </div>
                                <div className="title">Менеджер</div>
                                <p className="text">Переговоры с клиентами, развитие<br/> отношений, подготовка КП, управление<br/> сроками/бюджетом/качеством проектов</p>
                                <button onClick={() => this.clickButton()} className="submit-button">
                                    <span>Откликнуться</span>
                                    <img src={SendIcon} />
                                </button>
                            </div>
                            <div className="block">
                                <div className="img-wrap">
                                    <img src={DevIcon} />
                                </div>
                                <div className="title">Разработчик</div>
                                <p className="text">Верстка или программирование<br/> веб-проектов. </p>
                                <button onClick={() => this.clickButton()} className="submit-button">
                                    <span>Откликнуться</span>
                                    <img src={SendIcon} />
                                </button>
                            </div>
                        </div>
                        <p className="tac">Не видишь подходящей вакансии? Отправь резюме или <br/>свяжись с нами, возможно ты настолько крут, что мы не сможем устоять</p>                        
                    </div>
                </div>
                <OrderForm />
            </div>
        )
    }
}