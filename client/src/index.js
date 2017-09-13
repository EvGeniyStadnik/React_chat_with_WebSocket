import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'assets/styles/style.scss';
import ws from 'util/ws';

localStorage.removeItem('auth');

import App from 'containers/App';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => { renderApp(App) })
}