import React, { PureComponent } from 'react'
import './service.scss'
import InnerBanner from '../../components/inner-banner/index'
import ServiceBlocks from '../home/service-blocks'

export default class About extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="Услуги" text="Разработка и создание сайтов и интернет магазинов — наше основное направление. <br>Мы не просто делаем сайты, мы проводим полный комплекс услуг по рекламе, продвижению и маркетингу."/>
                <div className="service-wrap content">
                    <ServiceBlocks page="inner"/>
                </div>
            </div>
        )
    }
}