import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'assets/styles/style.scss';
import ws from 'util/ws';

window.ws = ws;

import Chat from 'containers/Chat';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

renderApp(Chat);

if (module.hot) {
  module.hot.accept(() => { renderApp(Chat) })
}