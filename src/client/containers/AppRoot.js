import React, { Component } from 'react';
// import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/index'
import Sidebar from '../components/sidebar/index'
import { connect } from 'react-redux'
import { toggleSidebar, hideSidebar } from '../actions/sidebar'
class AppRoot extends Component {
    render() {
        return (
            <div id="container">
                <Header toggleSidebar={this.props.toggleSidebar} />
                <Sidebar
                    toggleSidebar={this.props.toggleSidebar}
                    opened={this.props.sidebar.opened}
                    hideSidebar={this.props.hideSidebar}
                />
                <main className="mdl-layout__content">
                    {renderRoutes(this.props.route.routes)}
                </main>
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