import React, { Component } from 'react';
// import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/index'
import Sidebar from '../components/sidebar/index'

export default class AppRoot extends Component {
    render() {
        return (
            <div id="container">
                <Header />
                <Sidebar />
                <main className="mdl-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </main>
            </div>
        );
    }
}