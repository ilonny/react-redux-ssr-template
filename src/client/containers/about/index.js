import React, { Component } from 'react'
import '../../assets/styles/gray-section.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
import Link from 'react-router-dom/Link'
export default class About extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="О компании" text="О нас, в нескольких абзацах"/>
                <div className="gray-section">
                    <div className="content text">
                        <p>Мы оказываем услуги по разработке качественных, стильных и нешаблонных интернет-решений<br/> и сайтов. Что бы вы нам не поручили, мы постараемся уделить особое внимание вашему проекту,<br/> выслушаем ваши пожелания и дадим полезные советы.</p>
                        <p>Одна из наших особенностей заключается в том, что мы даем каждому клиенту выбрать<br/> только те компоненты и разделы, которые он желает видеть на своем сайте, не ограничивая его<br/> пакетными предложениями и не заставляя переплачивать за ненужные услуги.</p>
                        <p>Мы открылись в 2018 году, но на рынке digital-услуг мы с 2014 года. Территориально мы находимся<br/> в г. Сургуте и основная работа осуществляется штатными специалистами.</p>
                        <p>Мы всегда стараемся шагать в ногу со временем с современными технологиями и всегда находимся<br/> в <Link to="vacancy">поиске</Link> людей, разделяющих наши убеждения.</p>
                    </div>
                </div>
                <OrderForm />
            </div>
        )
    }
}