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
                component: Home
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/about',
                component: About
            }
        ]
    }
];

export default routes;