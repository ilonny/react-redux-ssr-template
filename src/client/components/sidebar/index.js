import React, { Component } from 'react'
import NavLinks from '../nav-links/index.js'
import './sidebar.scss'
import MaterialIcon from 'react-material-iconic-font'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <aside className={this.props.opened ? "sidebar opened" : "sidebar"}>
                <div className="sidebar-hrefs">
                    <NavLinks hideSidebar={this.props.hideSidebar}/>
                </div>
                <div className="sidebar-bottom">
                    <p>Flames Digital Agency</p>
                    <p>г. Сургут, ул. Лермонтова 11/3, кв 19</p>
                    <p>
                        <a href="tel:+79195356312" className="phone">
                            <MaterialIcon type="phone" />
                            <span>+7 (919) 535-63-12</span>
                        </a>
                    </p>
                    <p>
                        <a href="mailto:info@fflames.ru" className="phone">
                            <MaterialIcon type="email" />
                            <span>info@fflames.ru</span>
                        </a>
                    </p>
                </div>
            </aside>
        )
    }
}