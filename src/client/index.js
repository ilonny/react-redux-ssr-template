import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import './assets/material-design-iconic-font/css/material-design-iconic-font.min.scss'
import './assets/styles/style.scss'
import { AppContainer } from 'react-hot-loader'

const renderApp = (Component) => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#mount_place')
    )
}


renderApp(App)


if (module.hot) {
    module.hot.accept('./containers/App', () => { renderApp(App) })
}


render(<App />, document.querySelector('#mount_place'));
