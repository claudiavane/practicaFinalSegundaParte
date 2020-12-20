import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import reportWebVitals from './reportWebVitals';
import configureStore from './shared/redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById('root');
const store = configureStore(window.initialState);

const renderApp = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};

renderApp(AppRoutes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
