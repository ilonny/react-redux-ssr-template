import AppRoot from '../containers/AppRoot';
import Home from '../containers/home/index';
import Service from '../containers/service/index';
import Sites from '../containers/sites/index';
import Marketing from '../containers/marketing/index';
import Mobile from '../containers/mobile/index';
import Smm from '../containers/smm/index';
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
            {
                path: '/razrabotka-saitov',
                component: Sites,
                title: 'Услуги - Разработка адаптивных сайтов | Flames Digital Agency'                
            },
            {
                path: '/marketing',
                component: Marketing,
                title: 'Услуги - Продвижение и реклама в интернете | Flames Digital Agency'                
            },
            {
                path: '/mobile-apps',
                component: Mobile,
                title: 'Услуги - Создание мобильных приложений | Flames Digital Agency'                
            },
            {
                path: '/smm',
                component: Smm,
                title: 'Услуги - Продвижение в соц сетях | Flames Digital Agency'                
            },
        ]
    }
];

export default routes;