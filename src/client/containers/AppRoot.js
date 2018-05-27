import React, { Component } from 'react';
// import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/index'
import Sidebar from '../components/sidebar/index'
import { connect } from 'react-redux'
import { toggleSidebar, hideSidebar } from '../actions/sidebar'
import Footer from './footer/index'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
// import { AnimatedSwitch } from 'react-router-transition';

class AppRoot extends Component {
    render() {
        let footer;
        if (this.props.location.pathname != "/"){
            footer = <Footer />;
        } else {
            footer = null;
        }
        // const currentKey = location.pathname.split('/')[1] || '/' ? location.pathname.split('/')[1] || '/' : new Date();
        const currentKey = new Date();
        const timeout = { enter: 500, exit: 500 }
        return (
            <div id="container">
                <Header toggleSidebar={this.props.toggleSidebar} sidebar={this.props.sidebar} hideSidebar={this.props.hideSidebar}/>
                <Sidebar
                    toggleSidebar={this.props.toggleSidebar}
                    opened={this.props.sidebar.opened}
                    hideSidebar={this.props.hideSidebar}
                />
                <main className="mdl-layout__content">
                    <TransitionGroup component="main" className="page-main">
                        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear={true}>
                            {renderRoutes(this.props.route.routes)}
                        </CSSTransition>
                    </TransitionGroup>
                </main>
                {footer}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
	return {
        sidebar: state.mainReducer.sidebar
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
        toggleSidebar:  () => dispatch(toggleSidebar()),
        hideSidebar:  () => dispatch(hideSidebar()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRoot)