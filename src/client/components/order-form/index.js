import React, { PureComponent } from 'react'
import './order-form.scss'
import SendIcon from '../../assets/images/send.svg'

export default class OrderForm extends PureComponent{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
        console.log('state', this.state)
        let service_select;
        if (this.props.parentPage == 'service'){
            service_select = (
                <select name="service">
                    <option value="1">Разработка адаптивных сайтов</option>
                    <option value="2">Продвижение и реклама в интернете</option>
                    <option value="3">Разработка мобильных приложений</option>
                    <option value="4">Ведение бренда в соц сетях</option>
                </select>
            )
        } else {
            service_select = null;
        }
        return (
            <div className="order-form-wrap">
                <div className="hint"><span>O</span><span>R</span><span>D</span><span>E</span><span>R</span></div>
                <div className="order-form">
                    <form className="form">
                        <div className="order-form__title">{this.props.title ? this.props.title : "Оставить заявку"}</div>
                        <div className="order-form__hint">{this.props.text ? this.props.text : "5 минут разговора по телефону будет достаточно, чтобы определить вилку цен"}</div>
                        <input id="order-form-name-input" name="name" placeholder="Ваше имя" />
                        <input name="phone" placeholder="Телефон" />
                        {service_select}
                        <textarea name="phone" placeholder="Сообщение" />
                        <input type="hidden" hidden name="current-page" value={this.props.parentPage} />
                        <button className="submit-button">
                            <span>Отправить</span>
                            <img src={SendIcon} />
                        </button>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        )
    }
}