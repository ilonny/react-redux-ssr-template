import React, { Component } from 'react'
import './header.scss'
import '../../assets/styles/hamburgers.scss'
import SocialLinks from '../social-links/index.js'
import Logo from '../../assets/images/logo.svg'
import NavLinks from '../nav-links/index.js'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            hamburgerOpened: false
        }
    }
    toggleSidebar(){
        this.setState({
            hamburgerOpened: !this.state.hamburgerOpened            
        })
        this.props.toggleSidebar()
    }
    render() {
        return (
            <header className="header">
                <div className="left-side">
                    <div className="header-hamburger">
                        <button class={this.props.sidebar.opened ? "hamburger hamburger--minus is-active" : "hamburger hamburger--minus"} type="button" onClick={() => this.toggleSidebar()}>
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <Link to="/" onClick={this.props.hideSidebar}>
                        <img src={Logo} class="site-logo" />
                    </Link>
                </div>
                <div className="center-side header-links">
                    <NavLinks hideSidebar={this.props.hideSidebar}/>
                </div>
                <SocialLinks />           
            </header>
        )
    }
}