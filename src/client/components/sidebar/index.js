import React, { Component } from 'react'
import './sidebar.scss'
import MaterialIcon from 'react-material-iconic-font'
import { Link } from 'react-router-dom'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log('sidebar props', this.props)
        return (
            <aside className={this.props.opened ? "sidebar opened" : "sidebar"}>
                <div className="sidebar-top">
                    <div className="sidebar-top-close" onClick={ () => this.props.hideSidebar() }>
                        <MaterialIcon type="long-arrow-left" />                    
                    </div>
                    <a href="" className="sidebar-top-phone">
                        <MaterialIcon type="phone" />
                        <span>+7 (919) 535-63-12</span>
                    </a>
                </div>
                <div className="sidebar-hrefs">
                    <Link onClick={ () => this.props.hideSidebar() } to="/">Главная</Link>
                    <Link onClick={ () => this.props.hideSidebar() } to="/about">О нас</Link>
                </div>
            </aside>
        )
    }
}