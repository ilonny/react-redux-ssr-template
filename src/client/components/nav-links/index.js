import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks(){
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