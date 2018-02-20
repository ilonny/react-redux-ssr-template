import AppRoot from '../containers/AppRoot';
import Home from '../containers/home/index';
import About from '../containers/about/index';

const routes = [
    {
        component: AppRoot,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                title: 'Home page title'
            },
            {
                path: '/home',
                component: Home,
                title: 'Home page title'                
            },
            {
                path: '/about',
                component: About,
                title: 'About page title'                
            }
        ]
    }
];

export default routes;