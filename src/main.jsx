import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import {Provider} from "react-redux"
import Store from "./Store";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
     <App />
    </Provider>
  </React.StrictMode>
);
