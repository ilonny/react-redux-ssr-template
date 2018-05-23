import AppRoot from '../containers/AppRoot';
import Home from '../containers/home/index';
import Service from '../containers/service/index';
// import About from '../containers/about/index';

const routes = [
    {
        component: AppRoot,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                title: 'Flames Digital Agency | Разработка и продвижение сайтов в Сургуте'
            },
            {
                path: '/service',
                component: Service,
                title: 'Услуги | Flames Digital Agency'                
            },
        ]
    }
];

export default routes;