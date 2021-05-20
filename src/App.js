import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRoute';
import { store } from './store/Store';
import './styles/styles.scss'


function App() {
  return (
    <Provider store={store} >
        <AppRouter/>
    </Provider>
   
  );
}

export default App;
