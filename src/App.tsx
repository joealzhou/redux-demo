import React from 'react';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { store } from './reducers';
import Routers from './routers'

const history = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routers/>
      </Router>
    </Provider>
  );
}

export default App;
