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
        return (
            <div className="order-form-wrap">
                <div className="hint"><span>O</span><span>R</span><span>D</span><span>E</span><span>R</span></div>
                <div className="order-form">
                    <form className="form">
                        <div className="order-form__title">Оставить заявку</div>
                        <div className="order-form__hint">5 минут разговора по телефону будет достаточно, чтобы определить вилку цен</div>
                        <input name="name" placeholder="Ваше имя" />
                        <input name="phone" placeholder="Телефон" />
                        <select name="service">
                            <option value="1">Разработка адаптивных сайтов</option>
                            <option value="2">Продвижение и реклама в интернете</option>
                            <option value="3">Разработка мобильных приложений</option>
                            <option value="4">Ведение бренда в соц сетях</option>
                        </select>
                        <textarea name="phone" placeholder="Сообщение" />
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