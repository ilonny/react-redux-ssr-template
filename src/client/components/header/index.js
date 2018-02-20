import React, { Component } from 'react'
import './header.scss'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className="header">
                <div className="header-hamburger">
                    <button className="header-hamburger__button"></button>
                    <div className="header-hamburger__text">Welcome</div>
                </div>
                
            </header>
        )
    }
}