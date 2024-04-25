import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import About from './About.jsx';
//import Table from './Table.jsx';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      {/* <Route path="/:table" element={<Table/>}/> */}
      
    </Routes>
    </BrowserRouter> 
    
  </React.StrictMode>,
)
