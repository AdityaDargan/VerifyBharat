import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store,{Persistor} from './store';
import {positions , transitions , Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';


const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <PersistGate loading={null} persistor={Persistor}>
        
      </PersistGate>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
