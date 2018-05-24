import React, { Component } from 'react'
import '../../assets/styles/gray-section.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
import SocialLinks from '../../components/social-links/index'
export default class Collab extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="Контакты" text="Будем рады услышать вас"/>
                <div className="gray-section contacts">
                    <div className="content text">
                        <h4>Свяжитесь с нами</h4>
                        <div className="r mb">
                            <div className="c c--550">
                                <div className="title">Телефон:</div>
                                <a href="tel:+79195356312" className="link">+ 7 (919) 535-63-12</a>
                            </div>
                            <div className="c">
                                <div className="title">E-mail:</div>
                                <a href="mailto:hello@fflames.ru" className="link">hello@fflames.ru</a>
                            </div>
                        </div>
                        <div className="r">
                            <div className="c c--550">
                                <div className="title">Мы в соц сетях:</div>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
                <OrderForm />
            </div>
        )
    }
}