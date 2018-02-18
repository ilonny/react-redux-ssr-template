import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';

export default class AppRoot extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">React Universal App (SSR + SW)</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <Link className="mdl-navigation__link" to="/home"> Home </Link>
                            <Link className="mdl-navigation__link" to="/about"> About </Link>
                        </nav>
                    </div>
                </header>
                <main className="mdl-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </main>
            </div>
        );
    }
}