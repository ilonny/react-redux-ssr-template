import React, { Component } from 'react'
import './header.scss'
import '../../assets/styles/hamburgers.scss'
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
        console.log('header props', this.props)
        return (
            <header className="header">
                <div className="header-hamburger">
                    <button class={this.state.hamburgerOpened ? "hamburger hamburger--minus is-active" : "hamburger hamburger--minus"} type="button" onClick={() => this.toggleSidebar()}>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                    <div className="header-hamburger__text">Welcome</div>
                </div>
            </header>
        )
    }
}