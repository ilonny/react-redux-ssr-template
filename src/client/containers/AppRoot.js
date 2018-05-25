import React, { Component } from 'react';
// import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/index'
import Sidebar from '../components/sidebar/index'
import { connect } from 'react-redux'
import { toggleSidebar, hideSidebar } from '../actions/sidebar'
import Footer from './footer/index'
import Favicon from 'react-favicon'
import Fav from '../assets/images/favicon.ico'

class AppRoot extends Component {
    render() {
        console.log('app props', this.props)
        let footer;
        if (this.props.location.pathname != "/"){
            footer = <Footer />;
        } else {
            footer = null;
        }
        console.log('footer = ', footer)
        return (
            <div id="container">
                <Favicon url={Fav} />
                <Header toggleSidebar={this.props.toggleSidebar} sidebar={this.props.sidebar} hideSidebar={this.props.hideSidebar}/>
                <Sidebar
                    toggleSidebar={this.props.toggleSidebar}
                    opened={this.props.sidebar.opened}
                    hideSidebar={this.props.hideSidebar}
                />
                <main className="mdl-layout__content">
                    {renderRoutes(this.props.route.routes)}
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