import React, { Component } from 'react'
import './header.scss'
import '../../assets/styles/hamburgers.scss'
import SocialLinks from '../social-links/index.js'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            hamburgerOpened: false
        }
    }
    toggleSidebar(){
        // this.setState({
        //     hamburgerOpened: !this.state.hamburgerOpened            
        // })
        this.props.toggleSidebar()
    }
    render() {
        return (
            <header className="header">
                <div className="left-side">
                    <div className="header-hamburger">
                        <button class={this.state.hamburgerOpened ? "hamburger hamburger--minus is-active" : "hamburger hamburger--minus"} type="button" onClick={() => this.toggleSidebar()}>
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <img src={Logo} class="site-logo" />
                </div>
                <div className="center-side header-links">
                    <Link onClick={ () => this.props.hideSidebar() } to="/about">О компании</Link>
                    <Link onClick={ () => this.props.hideSidebar() } to="/service">Услуги</Link>
                    <Link onClick={ () => this.props.hideSidebar() } to="/contacts">Контакты</Link>
                    <Link onClick={ () => this.props.hideSidebar() } to="/collab">Сотрудничество</Link>
                    <Link onClick={ () => this.props.hideSidebar() } to="/vacancy">Вакансии</Link>
                </div>
                <SocialLinks />           
            </header>
        )
    }
}