import React, { PureComponent } from 'react'
import './service-form.scss'
export default class ServiceForm extends PureComponent{
    constructor(){
        super()
        this.state = {
            form: 1,
        }
    }
    render(){
        return (
            <div className="service-form">
                <div className="slider">
                    <button className="slider__button active">Оставить заявку</button>
                    <button className="slider__button">Обратный звонок</button>
                    <div className="carette"></div>
                </div>
            </div>
        )
    }
}