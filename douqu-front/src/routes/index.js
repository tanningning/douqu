import App from '../../src/App.js'
import Index from './Index/index.js'
import Login from './Login/index.js'

const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: {
            component: Dashboard
        },
        childRoutes: [
            {
                path: '/',
                component: Index
            },
            {
                path: 'login',
                component: Login,
            }
        ]
    }
]

React.render(<Router routes={routeConfig} />, document.body)