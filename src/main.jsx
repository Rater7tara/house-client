import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { router } from './Routes/Routes';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
