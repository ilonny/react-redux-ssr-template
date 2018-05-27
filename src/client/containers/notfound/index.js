import React, { PureComponent } from 'react'
import InnerBanner from '../../components/inner-banner/index'
// import OrderForm from '../../components/order-form/index'
import NotFoundIcon from '../../assets/images/error-404.svg'
import { Link } from 'react-router-dom'
import './not-found.scss'
export default class Mobile extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    constructor(){
        super();
        this.state = {
            focusClicked: false,
        }
    }
    clickButton(){
        // this.setState(state => {
        //     return {
        //         ...state,
        //         focusClicked: true,
        //     }
        // })
        document.getElementById('order-form-name-input').focus();
    }
    render() {
        return (
            <div>
                <InnerBanner type="small" title="Страница не найдена" text="404 Not found"/>
                <div className="not-found-wrap content">
                    <div className="img-wrap">
                        <img src = {NotFoundIcon} />
                        <Link to="/">Вернуться на главную</Link>
                    </div>
                </div>
            </div>
        )
    }
}