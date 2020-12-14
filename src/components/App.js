import React from 'react';
import Board from './Board.js';
import Header from './Header.js';
import { Provider } from 'react-redux';
import store from './../store/store';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
};

export default App;
