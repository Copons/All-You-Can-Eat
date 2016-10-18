import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import './style/main.scss';

const rootEl = document.getElementById('ayce');

render(
  <AppContainer>
    <Provider store={store}>
      <Counter />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    const NextCounter = require('./components/Counter').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextCounter />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}
