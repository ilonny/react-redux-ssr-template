import React, { Component } from 'react'
import './sidebar.scss'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <aside className={this.props.opened ? "sidebar opened" : "sidebar"}>
                sidebar
            </aside>
        )
    }
}