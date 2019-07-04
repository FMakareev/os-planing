import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ApolloProvider} from "react-apollo";

import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./Store/Store";
import Client from "./Apollo";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<Provider store={Store}>
  <ApolloProvider client={Client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
