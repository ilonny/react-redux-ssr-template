import React, { Component } from 'react'
import './header.scss'
import '../../assets/styles/hamburgers.scss'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className="header">
                <div className="header-hamburger">
                    <button class="hamburger hamburger--minus is-active" type="button">
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