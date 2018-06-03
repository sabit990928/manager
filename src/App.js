import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { compose } from 'recompact';
import devToolsEnhancer from 'remote-redux-devtools';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBgMfv3tRQcTpePtjFQ5rPwKZFlDwKqhNE',
      authDomain: 'manager-839e6.firebaseapp.com',
      databaseURL: 'https://manager-839e6.firebaseio.com',
      projectId: 'manager-839e6',
      storageBucket: 'manager-839e6.appspot.com',
      messagingSenderId: '875856489748',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk), devToolsEnhancer()));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
