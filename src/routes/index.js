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


var nodemailer = require('nodemailer');


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

router.post('/form', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Yandex',
        auth: {
            user: 'fflamesstudio@yandex.ru', // Your email id
            pass: 'Qwerty123' // Your password
        }
    });
    var text = JSON.stringify(req.body);

    var mailOptions = {
        from: 'fflamesstudio@yandex.ru', // sender address
        to: 'mail@gornak.me', // list of receivers
        subject: 'Email from Flames', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };


    // res.json({
    //     // yo: info.response,
    //     message: 'Спасибо! Ваше сообщение успешно отправлено, скоро мы свяжемся с вами',
    //     status: '200'
    // });
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({
                // yo: info.response,
                message: 'Спасибо! Ваше сообщение успешно отправлено, скоро мы свяжемся с вами',
                status: '200'
            });
        };
    });
});

module.exports = router;