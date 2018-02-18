import React, { Component } from 'react'
// import { render } from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';

import configureStore from '../store'
import routes from '../routes';
// import reducers from '/reducers';

const store = configureStore();


export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					{renderRoutes(routes)}
				</BrowserRouter>
			</Provider>
		)
	}
}