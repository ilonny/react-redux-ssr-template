import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers/index'

export default function configureStore(){
	// return createStore(
	// 	appReducer,
	// 	window.__INITIAL_STATE__,
	// 	compose(
	// 		applyMiddleware(thunk),
	// 		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// 	)
	// );



	const store =  createStore(
		appReducer,
		window.__INITIAL_STATE__,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
	if (module.hot){
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}