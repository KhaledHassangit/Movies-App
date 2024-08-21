import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Provider } from 'react-redux';
import { MyStore } from './Redux/Store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={MyStore}>   <App />    </Provider>);

