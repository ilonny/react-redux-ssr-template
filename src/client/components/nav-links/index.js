import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class NavLinks extends PureComponent{
    render() {
        console.log('nav links props', this.props)
        return (
            <div>
                <Link onClick={ () => this.props.hideSidebar() } to="/about">О компании</Link>
                <Link onClick={ () => this.props.hideSidebar() } to="/service">Услуги</Link>
                <Link onClick={ () => this.props.hideSidebar() } to="/contacts">Контакты</Link>
                <Link onClick={ () => this.props.hideSidebar() } to="/collab">Сотрудничество</Link>
                <Link onClick={ () => this.props.hideSidebar() } to="/vacancy">Вакансии</Link>
            </div>
        )
    }
}