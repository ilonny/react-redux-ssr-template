import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/index'

export default class AppRoot extends Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <main className="mdl-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </main>
            </div>
        );
    }
}