import express from 'express';
import request from 'request';

import React from 'react';
import { renderToString } from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux'

import routes from '../client/routes';
import configureStore from '../client/store';
import appReducer from '../client/reducers/index'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(appReducer, applyMiddleware(thunk));
const router = express.Router();

router.get('*', (req, res) => {
    let context = {};
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                {renderRoutes(routes)}
            </StaticRouter> 
        </Provider>
    );
    let m_routes = matchRoutes(routes, req.url);
    let route_title;
    m_routes.forEach(element => {
        if (element.route.title){
            route_title = element.route.title;
        }
    });
    res.render('index', { title: route_title, data: false, content });
});

module.exports = router;